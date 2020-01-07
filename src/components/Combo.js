module.exports = {

    components: {
        'add': require('./Add'),
    },

    props: {
        oData: Object,
        aCategory: Array
    },
    data() {
        const oData = Object.assign(
            {
                aHitDetail: [],
                nDamage: 0,
                nKi: 0
            },
            this.oData
        );
        setTimeout( this.damage.bind(this), 1 );
        return oData;
    },
    computed: {
        aLabelItem() {
            return this.aItem.map( oItem => {
                return oItem.sCategory == 'character' ?
                        data.character[ this.sCharacter ][ oItem.sType ][ oItem.nIndex ].label :
                        data[ oItem.sCategory ][ oItem.sType ][ oItem.nIndex ].label;
            } );
        }
    },

    watch: {
        aItem() {
            this.damage();
        }
    },
    methods: {
        set(sProp, uValue) {
            this[sProp] = uValue;
            const oData = Object.assign( {}, this.$data );
            delete oData.aHitDetail;
            ES.store.combo.update( oData._id, oData );
        },
        add(nIndex, oItem) {
            this.aItem.splice(nIndex, 0, oItem);
        },
        remove(nIndex) {
            this.aItem.splice(nIndex, 1);
        },
        damage() {
            let bFirstHit = true,
                nTableIndex = 0,
                aTable = null,
                aHitDetail = [],
                nTotalDamage = 0,
                nTotalKi = 0,
                nRatioKi = 100;
            
            this.aItem
                .map( oItem => {
                    return oItem.sCategory == 'character' ?
                        data.character[ this.sCharacter ][ oItem.sType ][ oItem.nIndex ] :
                        data[ oItem.sCategory ][ oItem.sType ][ oItem.nIndex ];
                } )
                .forEach(oItem => {
                    if( oItem.damage != null ){
                        let aHitPercent = [],
                            aHitDamage = [],
                            aHitKi = [],
                            aDamage = oItem.damage,
                            aMinimum = oItem.minimum || [],
                            aProration = oItem.proration || [],
                            aKi = oItem.ki || [];
                            
                        if( !Array.isArray(oItem.damage) ){
                            aDamage = [aDamage];
                            aMinimum = oItem.minimum ? [aMinimum] : [];
                            aProration = oItem.proration ? [aProration] : [];
                            aKi = oItem.ki ? [aKi] : [];
                        }
                        
                        aDamage.forEach( (nHitDamage, nHitIndex) => {
                            let nProration = aProration[nHitIndex] || 0;
                            if( bFirstHit ){
                                aTable = data.table[ oItem.table ];
                                oItem.initial && (nProration = oItem.initial);
                            }

                            let nDamage = Math.max( aMinimum[nHitIndex] || 0, Math.floor(nHitDamage * aTable[nTableIndex] / 100) ),
                                nKi = (aKi[nHitIndex] || 0) * nRatioKi / 100;

                            aHitPercent.push( aTable[nTableIndex] + '%' );
                            aHitDamage.push( nDamage );
                            nKi && aHitKi.push( nKi );

                            nTotalDamage += nDamage;
                            nTotalKi += nKi;
                            nTableIndex = Math.min(aTable.length - 1, nTableIndex + nProration);
                            nKi < 0 && (nRatioKi = 10);
                            bFirstHit = false;
                        } );

                        aHitDetail.push( {
                            sPercent: aHitPercent.join(', '),
                            sDamage: aHitDamage.join(', '),
                            sKi: aHitKi.join(', ')
                        } );
                    } else {
                        aHitDetail.push(null);
                    }
                } );

            this.aHitDetail = aHitDetail;
            this.nKi = nTotalKi;
            this.set('nDamage', nTotalDamage);
        }
    },
    
    template: `
        <article class="v-combo uk-margin-medium">
            <header class="uk-grid-small uk-margin-small-bottom" uk-grid>
                <div class="uk-width-expand">
                    <input class="uk-h3 uk-form-blank uk-display-block uk-width-1-1 uk-margin-remove" :value="sName" @input="set('sName', $event.target.value)">
                    <span class="uk-text-meta">{{ sCategory }} - {{ nDamage }} damages - {{ nKi }} ki</span>
                    <div class="uk-padding-small" uk-dropdown>
                        <ul class="uk-nav uk-dropdown-nav">
                            <li class="uk-nav-header">Category</li>
                            <li class="uk-nav-divider"></li>
                            <li
                                v-for="sCurrentCategory in aCategory"
                                v-show="sCurrentCategory != sCategory"
                            >
                                <a 
                                    @click="set('sCategory', sCurrentCategory)"
                                    href="#"
                                >
                                    {{ sCurrentCategory }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="v-combo-control">
                    <add
                        :s-character="sCharacter"
                        @add="add(aItem.length, $event)"
                        class="v-combo-add"
                    >
                        <button class="uk-button uk-button-default">Add move</button>
                    </add>
                    <button 
                        @click="$emit('duplicate')"
                        class="uk-button uk-button-default"
                    >
                        Duplicate
                    </button>
                    <button 
                        @click="$emit('remove')"
                        class="uk-button uk-button-default uk-text-danger"
                    >
                        Remove
                    </button>
                </div>
            </header>
            <div>
                <span
                    v-for="(sItem, nIndex) in aLabelItem"
                    class="v-combo-item"
                >
                    <add
                        :s-character="sCharacter"
                        @add="add(nIndex, $event)"
                        class="uk-margin-small-right"
                    >
                        <span uk-icon="plus-circle"></span>
                    </add><!--
                    --><a
                        @click="remove(nIndex)"
                        href="#"
                        title="Remove"
                        class="uk-margin-small-right uk-display-inline-block"
                    >
                        <div>{{ sItem }}</div>
                        <div v-if="aHitDetail[nIndex]" class="v-combo-item-detail uk-text-meta">
                            <div class="v-combo-item-detail-damage" v-html="aHitDetail[nIndex].sDamage"></div>
                            <div class="v-combo-item-detail-percent" v-html="aHitDetail[nIndex].sPercent"></div>
                            <div class="v-combo-item-detail-ki" v-html="aHitDetail[nIndex].sKi"></div>
                        </div>
                    </a>
                </span>
            </div>
            </div>
        </article>
    `
};