const
    fs = require('fs'),
    path = require('path'),
    ES = require('./plugins/electron-starter/core'),
    
    data = require('./assets/js/data.js');

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
        },
        computed: {
            oCombo() {
                return ES.store.combo.select( ES.store.combo.index('sCharacter'), this.sSelectedCharacter );
            }
        },
        
        mounted() {
            this.$nextTick( setTimeout( () => document.body.classList.remove('ES-loading'), 800 ) );
        },
        methods: {
            change(sCode) {
                this.sSelectedCharacter = sCode;
            }
        }
    } );
} );