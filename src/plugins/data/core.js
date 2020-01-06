const oData = {
    table: [
        [100, 90, 80, 70, 60, 50, 40, 30, 30, 30, 30, 25, 25, 25, 20, 20, 20, 15],
        [100, 90, 80, 70, 60, 50, 40, 30, 20, 20, 20, 20, 15, 15, 15, 10],
        [100, 90, 80, 70, 60, 50, 40, 30, 20, 10]
    ],

    universal: {
        direction: [
            {
                label: '[1]'
            },
            {
                label: '[2]'
            },
            {
                label: '[3]'
            },
            {
                label: '[4]'
            },
            {
                label: '[5]'
            },
            {
                label: '[6]'
            },
            {
                label: '[7]'
            },
            {
                label: '[8]'
            },
            {
                label: '[9]'
            },
        ],
        move: [
            {
                label: 'jc'
            },
            {
                label: 'sj'
            },
            {
                label: 'Rejump'
            },
            {
                label: 'Dash'
            },
            {
                label: 'Backdash'
            },
            {
                label: 'AD'
            },
            {
                label: 'Airbackdash'
            },
            {
                label: 'IAD'
            },
        ],
        universal: [
            {
                label: 'dl'
            },
            {
                label: '6M',
                damage: 850,
                proration: 1,
                initial: 3,
                table: 2
            },
            {
                label: 'SD',
                damage: 300,
                proration: 1,
                initial: 2,
                table: 1
            },
            {
                label: 'Vanish',
                damage: 850,
                proration: 5,
                initial: 5,
                table: 1
            },
            {
                label: 'Empty Vanish'
            },
            {
                label: 'DR',
                damage: 1760,
                proration: 6,
                initial: 9,
                table: 0
            },
            {
                label: 'DR Snap',
                damage: 1960
            },
            {
                label: 'Sparking',
                damage: 0,
                proration: 1,
                initial: 6,
                table: 2
            },
        ]
    },

    character: {
        JNB: require('./jnb'),
        GKU: require('./gku'),
        NPA: require('./npa'),
    },

    teammate: {
        assist: [],
        dhc: []
    }
};

let i, j, oSuper, bSuperLevel1;
for( i in oData.character ){
    bSuperLevel1 = false;
    oData.teammate.assist.push( Object.assign( {
            label: i,
            sCharacter: i
        },
        oData.character[i].assist
    ) );

    for( j in oData.character[i].super ){
        if( (oSuper = oData.character[i].super[j]).dhc ) {
            oData.teammate.dhc.push( Object.assign(
                {},
                oSuper,
                {
                    label: i + ' level ' + oSuper.level + ( oSuper.level == 1 && bSuperLevel1 ? ' - ' + oSuper.label : ''),
                    sCharacter: i
                }
            ) );
            bSuperLevel1 = oSuper.level == 1;
        }
    }
}

module.exports = oData;