const
    fs = require('fs'),
    path = require('path'),
    ES = require('./plugins/electron-starter/core'),
    
    data = require('./plugins/data/core.js');

ES.initialize( {
    modules: {
        store: 'combo'
    }
} ).then( () => {

    ES.oVue = new Vue( {
        el: '.ES-wrap',
        
        components: {
            'combo': require('./components/Combo'),
            'window-control': require('./components/WindowControl')
        },
        
        data: {
            oCharacter: data.character,
            sSelectedCharacter: Object.keys(data.character).shift(),
            nCompute: 0,
            aCategory: data.category,
            aStatus: data.status,
            oDetail: data.detail
        },
        computed: {
            oCombo() {
                this.nCompute; // Force computed
                return ES.store.combo.select( ES.store.combo.index('sCharacter', this.sSelectedCharacter) );
            },
            oClassDetail() {
                const oClassDetail = {};
                for( let i in this.oDetail ){
                    oClassDetail[ '--detail-' + i.toLowerCase() ] = this.oDetail[i];
                }
                return oClassDetail;
            }
        },
        
        mounted() {
            this.$nextTick( setTimeout( () => document.body.classList.remove('ES-loading'), 800 ) );
        },
        methods: {
            change(sCode) {
                this.sSelectedCharacter = sCode;
            },

            add() {
                const oCombo = {
                    sName: 'New Combo',
                    sCharacter: this.sSelectedCharacter,
                    sCategory: this.aCategory[0],
                    nStatus: 0,
                    aItem: [],
                    nDamage: 0
                };
                ES.store.combo.insert(oCombo);
                this.nCompute++;
            },
            duplicate(nId) {
                ES.store.combo.insert( Object.assign( {}, this.oCombo[nId] ) );
                this.nCompute++;
            },
            remove(nId) {
                ES.store.combo.delete(nId);
                this.nCompute++;
            },

            detail(sDetail) {
                const oDetail = Object.assign( {}, this.oDetail );
                if( sDetail ){
                    oDetail[sDetail] = !oDetail[sDetail];
                } else {
                    let bDetail = null;
                    for( sDetail in oDetail ){
                        bDetail == null && (bDetail = !oDetail[sDetail]);
                        oDetail[sDetail] = bDetail;
                    }
                }
                this.oDetail = oDetail; 
            }
        }
    } );
} );