const oData = {
    category: [
        'Midscreen',
        'Midscreen to Corner',
        'Corner',
    ],

    detail: {
        Damage: false, 
        Percent: false,
        Ki: false
    },

    table: [
        [100, 90, 80, 70, 60, 50, 40, 30, 30, 30, 30, 25, 25, 25, 20, 20, 20, 15],
        [100, 90, 80, 70, 60, 50, 40, 30, 20, 20, 20, 20, 15, 15, 15, 10],
        [100, 90, 80, 70, 60, 50, 40, 30, 20, 10]
    ],

    status: [
        {
            label: 'No buff',
            character: null,
            ratio: {
                damage: 0,
                ki: 0
            }
        },
        {
            label: 'Sparking',
            character: null,
            ratio: {
                damage: 20,
                ki: 100
            },
            check: 'spark'
        },
        {
            label: 'Golden',
            character: 'FRZ',
            ratio: {
                damage: 20,
                ki: 0
            },
            check: 'gold'
        },
        {
            label: 'Sparking & Golden',
            character: 'FRZ',
            ratio: {
                damage: 30,
                ki: 0
            },
            check: ['spark', 'gold']
        },
        {
            label: 'PU Level 1',
            character: 'AGH',
            ratio: {
                damage: 0,
                ki: 0
            },
            check: 'pu_1'
        },
        {
            label: 'PU Level 2',
            character: 'AGH',
            ratio: {
                damage: 2,
                ki: 0
            },
            check: 'pu_2'
        },
        {
            label: 'PU Level 3',
            character: 'AGH',
            ratio: {
                damage: 4,
                ki: 0
            },
            check: 'pu_3'
        },
        {
            label: 'PU Level 4',
            character: 'AGH',
            ratio: {
                damage: 6,
                ki: 0
            },
            check: 'pu_4'
        },
        {
            label: 'PU Level 5',
            character: 'AGH',
            ratio: {
                damage: 8,
                ki: 0
            },
            check: 'pu_5'
        },
        {
            label: 'PU Level 6',
            character: 'AGH',
            ratio: {
                damage: 10,
                ki: 0
            },
            check: 'pu_6'
        },
        {
            label: 'PU Level 7',
            character: 'AGH',
            ratio: {
                damage: 10,
                ki: 0
            },
            check: 'pu_7'
        },
        {
            label: 'Sparking & PU Level 1',
            character: 'AGH',
            ratio: {
                damage: 20,
                ki: 0
            },
            check: ['spark', 'pu_1']
        },
        {
            label: 'Sparking & PU Level 2',
            character: 'AGH',
            ratio: {
                damage: 22,
                ki: 0
            },
            check: ['spark', 'pu_2']
        },
        {
            label: 'Sparking & PU Level 3',
            character: 'AGH',
            ratio: {
                damage: 24,
                ki: 0
            },
            check: ['spark', 'pu_3']
        },
        {
            label: 'Sparking & PU Level 4',
            character: 'AGH',
            ratio: {
                damage: 26,
                ki: 0
            },
            check: ['spark', 'pu_4']
        },
        {
            label: 'Sparking & PU Level 5',
            character: 'AGH',
            ratio: {
                damage: 28,
                ki: 0
            },
            check: ['spark', 'pu_5']
        },
        {
            label: 'Sparking & PU Level 6',
            character: 'AGH',
            ratio: {
                damage: 30,
                ki: 0
            },
            check: ['spark', 'pu_6']
        },
        {
            label: 'Sparking & PU Level 7',
            character: 'AGH',
            ratio: {
                damage: 30,
                ki: 0
            },
            check: ['spark', 'pu_7']
        },
        {
            label: 'Gigantic Roar',
            character: 'BRS',
            ratio: {
                damage: 5,
                ki: 0
            },
            check: 'roar'
        },
        {
            label: 'Sparking & Gigantic Roar',
            character: 'BRS',
            ratio: {
                damage: 25,
                ki: 0
            },
            check: ['spark', 'roar']
        }
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
                ki: 12,
                damage: 850,
                proration: 1,
                initial: 3,
                table: 2
            },
            {
                label: 'SD',
                ki: 8,
                damage: 300,
                proration: 1,
                initial: 2,
                table: 1
            },
            {
                label: 'Vanish',
                ki: -100,
                damage: 850,
                minimum: 170,
                proration: 5,
                initial: 5,
                table: 1
            },
            {
                label: 'Empty Vanish'
            },
            {
                label: 'DR SD',
                ki: [2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 4, 62.75],
                damage: [120, 120, 120, 120, 120, 120, 120, 120, 800, 300],
                proration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
                table: 0
            },
            {
                label: 'DR Smash!',
                ki: [2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 4],
                damage: [120, 120, 120, 120, 120, 120, 120, 120, 800],
                proration: [0, 0, 0, 0, 0, 0, 0, 0, 6]
            },
            {
                label: 'DR Snap',
                ki: [2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 4],
                damage: [120, 120, 120, 120, 120, 120, 120, 120, 1000],
                proration: [0, 0, 0, 0, 0, 0, 0, 0, 6]
            },
            {
                label: 'Sparking',
                ki: 0,
                damage: 0,
                proration: 1,
                initial: 6,
                table: 2,
                status: 'spark'
            }
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