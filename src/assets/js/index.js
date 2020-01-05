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
            nCompute: 0
        },
        computed: {
            oCombo() {
                this.nCompute; // Force computed
                return ES.store.combo.select( ES.store.combo.index('sCharacter', this.sSelectedCharacter) );
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
                    sCategory: 'TODO',
                    aItem: []
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
            }
        }
    } );
} );