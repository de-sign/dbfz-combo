module.exports = {

    components: {
        'add': require('./Add'),
    },

    props: {
        oData: Object
    },
    data() {
        const oData = Object.assign(
            {
                aHitInfo: []
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
            delete oData.aHitInfo;
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
                aHitInfo = [],
                nTotal = 0;
            
            this.aItem
                .map( oItem => {
                    return oItem.sCategory == 'character' ?
                        data.character[ this.sCharacter ][ oItem.sType ][ oItem.nIndex ] :
                        data[ oItem.sCategory ][ oItem.sType ][ oItem.nIndex ];
                } )
                .forEach(oItem => {
                    if( oItem.damage != null ){
                        let aPercent = [],
                            aDamage = [],
                            aData = oItem.damage,
                            aProration = oItem.proration;
                            
                        if( !Array.isArray(oItem.damage) ){
                            aData = [aData];
                            aProration = [aProration];
                        }
                        
                        aData.forEach( (nHitDamage, nHitIndex) => {
                            let nProration = aProration[nHitIndex];
                            if( bFirstHit ){
                                aTable = data.table[ oItem.table ];
                                nProration = oItem.initial;
                            }

                            let nDamage = Math.max( oItem.minimum || 0, Math.floor(nHitDamage * aTable[nTableIndex] / 100) );

                            aPercent.push( aTable[nTableIndex] + '%' );
                            aDamage.push( nDamage );
                            nTotal += nDamage;
                            nTableIndex = Math.min(aTable.length - 1, nTableIndex + nProration);
                            bFirstHit = false;
                        } );

                        aHitInfo.push( {
                            sPercent: aPercent.join(', '),
                            sDamage: aDamage.join(', ')
                        } );
                    } else {
                        aHitInfo.push(null);
                    }
                } );

            this.aHitInfo = aHitInfo;
            this.set('nDamage', nTotal);
        }
    },
    
    template: `
        <article class="v-combo uk-margin-medium">
            <header class="uk-grid-small uk-margin-small-bottom" uk-grid>
                <div class="uk-width-expand">
                    <input class="uk-h3 uk-form-blank uk-display-block uk-width-1-1 uk-margin-remove" :value="sName" @input="set('sName', $event.target.value)">
                    <span class="uk-text-meta">{{ sCategory }} - {{ nDamage }} damages</span>
                </div>
                <div class="v-combo-control">
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
                        @click="add(nIndex, $event)"
                        class="uk-margin-small-right"
                    ></add>
                    <a
                        @click="remove(nIndex)"
                        href="#"
                        title="Remove"
                        class="uk-margin-small-right uk-display-inline-block"
                    >
                        <div>{{ sItem }}</div>
                        <div v-if="aHitInfo[nIndex]" class="v-combo-item-info uk-text-meta">
                            <div v-html="aHitInfo[nIndex].sDamage"></div>
                            <div v-html="aHitInfo[nIndex].sPercent"></div>
                        </div>
                    </a>
                </span>
                <add
                    :s-character="sCharacter"
                    @click="add(aItem.length, $event)"
                    class="v-combo-add"
                ></add>
            </div>
        </article>
    `
};