const
    ES = require('./plugins/electron-starter/core');

ES.initialize( {
    sUrl: ES.paths.root + '/index.html',
    oWindowOptions: {
        width: 800,
        height: 600,
        minWidth: 500,
        minHeight: 600,
        center: true,
        frame: false,
        show: false,
        webPreferences: {
            nodeIntegration: true,
            // devTools: false
        }
    },

    modules: {
        store: {
            combo: {
                _index: ['sCharacter', 'sCategory']
            }
        }
    }
} )
.then( () => {
    ES.windows.main.maximize();
} );