module.exports = {

    components: {
        'add': require('./Add'),
    },

    props: {
        oData: Object
    },
    data() {
        return this.oData;
    },
    computed: {
        aLabelItem() {
            return this.aItem.map( oItem => {
                return oItem.sCategory == 'character' ?
                        data.character[ this.sCharacter ][ oItem.sType ][ oItem.nIndex ].label :
                        data[ oItem.sCategory ][ oItem.sType ][ oItem.nIndex ].label;
            } );
        },
        nDamage() {
            let nDamage = 0,
                bFirstHit = false,
                nTableIndex = 0,
                aTable = null;
            
            this.aItem
                .map( oItem => {
                    return oItem.sCategory == 'character' ?
                        data.character[ this.sCharacter ][ oItem.sType ][ oItem.nIndex ] :
                        data[ oItem.sCategory ][ oItem.sType ][ oItem.nIndex ];
                } )
                .forEach(oItem => {
                    if( oItem.damage != null ){

                        let aData = oItem.damage,
                            aProration = oItem.proration;
                        if( !Array.isArray(oItem.damage) ){
                            aData = [aData];
                            aProration = [aProration];
                        }
                        
                        aData.forEach( (nHitDamage, nHitIndex) => {
                            let nProration = aProration[nHitIndex];
                            if( !bFirstHit ){
                                aTable = data.table[ oItem.table ];
                                nProration = oItem.initial;
                            }
                            let nCoef = aTable[nTableIndex] / 100;
                            nDamage += Math.max( oItem.minimum || 0, Math.floor(nHitDamage * nCoef) );
                            nTableIndex = Math.min(aTable.length - 1, nTableIndex + nProration);
                            bFirstHit = true;
                        } );
                    }
                } );

            return nDamage;
        }
    },

    methods: {
        set(sProp, uValue) {
            this[sProp] = uValue;
            ES.store.combo.update( this.$data._id, this.$data );
        },
        add(nIndex, oItem) {
            this.aItem.splice(nIndex, 0, oItem);
            ES.store.combo.update( this.$data._id, this.$data );
        },
        remove(nIndex,) {
            this.aItem.splice(nIndex, 1);
            ES.store.combo.update( this.$data._id, this.$data );
        }
    },
    
    template: `
        <article class="v-combo uk-margin-medium">
            <header class="uk-grid-small" uk-grid>
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
                        class="uk-margin-small-right"
                    >
                        {{ sItem }}
                    </span>
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