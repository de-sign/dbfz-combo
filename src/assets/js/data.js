module.exports = {
    universal: [
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
            label: 'Snapback',
            damage: 200
        },
        {
            label: 'Sparking',
            damage: 0,
            proration: 1,
            initial: 6,
            table: 2
        },
        {
            label: 'Jump'
        },
        {
            label: 'Superjump'
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
            label: 'Airdash'
        },
        {
            label: 'Airbackdash'
        },
        {
            label: 'IAD'
        }
    ],

    character: {
        JNB: {
            label: 'Janemba',
            normal: [
                {
                    label: '5L',
                    damage: 400,
                    proration: 1,
                    initial: 2,
                    table: 1
                },
                {
                    label: '5LL',
                    damage: 700,
                    proration: 1,
                    initial: 1,
                    table: 0
                },
                {
                    label: '5LLL',
                    damage: [600, 600],
                    proration: [1, 0],
                    initial: 3,
                    table: 2
                },
                {
                    label: '2L',
                    damage: 400,
                    proration: 1,
                    initial: 2,
                    table: 1
                },
                {
                    label: '5M',
                    damage: 700,
                    proration: 1,
                    initial: 1,
                    table: 0
                },
                {
                    label: '2M',
                    damage: 700,
                    proration: 1,
                    initial: 1,
                    table: 0
                },
                {
                    label: '5H',
                    damage: 850,
                    proration: 1,
                    initial: 1,
                    table: 0
                },
                {
                    label: '2H',
                    damage: 850,
                    proration: 1,
                    initial: 1,
                    table: 0
                },
                {
                    label: '5S',
                    damage: 300,
                    proration: 1,
                    initial: 2,
                    table: 1
                },
                {
                    label: '2S',
                    damage: 300,
                    proration: 1,
                    initial: 2,
                    table: 1
                },
                {
                    label: '22S',
                    damage: 600,
                    proration: 1,
                    initial: 3,
                    table: 2
                },
                {
                    label: 'j.L',
                    damage: 400,
                    proration: 1,
                    initial: 2,
                    table: 1
                },
                {
                    label: 'j.M',
                    damage: 700,
                    proration: 1,
                    initial: 2,
                    table: 1
                },
                {
                    label: 'j.2M',
                    damage: 900,
                    proration: 1,
                    initial: 3,
                    table: 2
                },
                {
                    label: 'j.H',
                    damage: 850,
                    proration: 1,
                    initial: 2,
                    table: 1
                },
                {
                    label: 'j.2H',
                    damage: 850,
                    proration: 1,
                    initial: 2,
                    table: 1
                },
                {
                    label: 'j.S',
                    damage: 300,
                    proration: 1,
                    initial: 2,
                    table: 1
                },
                {
                    label: 'j.22S',
                    damage: 600,
                    proration: 1,
                    initial: 3,
                    table: 2
                }
            ],
            special: [
                {
                    label: '236L',
                    damage: 1100,
                    proration: 2,
                    initial: 3,
                    table: 1
                },
                {
                    label: '236M',
                    damage: 1200,
                    proration: 2,
                    initial: 3,
                    table: 1
                },
                {
                    label: '236H',
                    damage: 1300,
                    proration: 2,
                    initial: 3,
                    table: 1
                },
                {
                    label: 'j.236L',
                    damage: 1100,
                    proration: 2,
                    initial: 3,
                    table: 1
                },
                {
                    label: 'j.236M',
                    damage: 1200,
                    proration: 2,
                    initial: 3,
                    table: 1
                },
                {
                    label: 'j.236H',
                    damage: 1300,
                    proration: 2,
                    initial: 3,
                    table: 1
                },
                {
                    label: '214L',
                    damage: 1200,
                    proration: 1,
                    initial: 3,
                    table: 2
                },
                {
                    label: '214M',
                    damage: 1250,
                    proration: 1,
                    initial: 3,
                    table: 2
                },
                {
                    label: '214H',
                    damage: 1300,
                    proration: 1,
                    initial: 3,
                    table: 2
                },
                {
                    label: 'j.214L',
                    damage: [350, 350, 350],
                    proration: [2, 0, 0],
                    initial: 3,
                    table: 1
                },
                {
                    label: 'j.214M',
                    damage: [350, 350, 350],
                    proration: [2, 0, 0],
                    initial: 3,
                    table: 1
                },
                {
                    label: 'j.214H',
                    damage: [350, 350, 350, 350, 350, 350],
                    proration: [2, 0, 0, 0, 0, 0],
                    initial: 3,
                    table: 1
                },
                {
                    label: '236S'
                },
                {
                    label: 'j.236S'
                },
                {
                    label: '214S'
                },
                {
                    label: 'j.214S'
                }
            ],
            super: [
                {
                    label: '236LM',
                    level: 1,
                    damage: 2415,
                    minimum: 815,
                    DHC: true
                },
                {
                    label: 'j.236LM',
                    level: 1,
                    damage: 2415,
                    minimum: 815
                },
                {
                    label: '236HS',
                    level: 1,
                    damage: 1995,
                    minimum: 799
                },
                {
                    label: '214LM',
                    level: 3,
                    damage: 4108,
                    minimum: 1672
                }
            ],
            assist: {
                damage: [450, 450],
                proration: [2, 0],
                initial: 3,
                table: 1
            }
        },
        GKU: {
            label: 'Goku SSJ',
            normal: [
                {
                    label: '5L',
                    damage: 400,
                    proration: 1,
                    initial: 2,
                    table: 1
                },
                {
                    label: '5LL',
                    damage: 700,
                    proration: 1,
                    initial: 1,
                    table: 0
                },
                {
                    label: '5LLL',
                    damage: 1000,
                    proration: 1,
                    initial: 1,
                    table: 0
                },
                {
                    label: '2L',
                    damage: 400,
                    proration: 1,
                    initial: 2,
                    table: 1
                },
                {
                    label: '5M',
                    damage: 700,
                    proration: 1,
                    initial: 1,
                    table: 0
                },
                {
                    label: '2M',
                    damage: 700,
                    proration: 1,
                    initial: 1,
                    table: 0
                },
                {
                    label: '5H',
                    damage: 850,
                    proration: 1,
                    initial: 1,
                    table: 0
                },
                {
                    label: '2H',
                    damage: 850,
                    proration: 1,
                    initial: 1,
                    table: 0
                },
                {
                    label: '5S',
                    damage: 300,
                    proration: 1,
                    initial: 2,
                    table: 1
                },
                {
                    label: '2S',
                    damage: 600,
                    proration: 1,
                    initial: 2,
                    table: 1
                },
                {
                    label: 'j.L',
                    damage: 400,
                    proration: 1,
                    initial: 2,
                    table: 1
                },
                {
                    label: 'j.M',
                    damage: 700,
                    proration: 1,
                    initial: 2,
                    table: 1
                },
                {
                    label: 'j.H',
                    damage: 850,
                    proration: 1,
                    initial: 2,
                    table: 1
                },
                {
                    label: 'j.2H',
                    damage: 850,
                    proration: 1,
                    initial: 2,
                    table: 1
                },
                {
                    label: 'j.S',
                    damage: 600,
                    proration: 1,
                    initial: 2,
                    table: 1
                }
            ],
            special: [
                {
                    label: '236L NT',
                    damage: 1200,
                    proration: 2,
                    initial: 3,
                    table: 2
                },
                {
                    label: '236M NT',
                    damage: 1300,
                    proration: 2,
                    initial: 3,
                    table: 2
                },
                {
                    label: '236H NT',
                    damage: 1400,
                    proration: 2,
                    initial: 3,
                    table: 2
                },
                {
                    label: 'j.236L NT',
                    damage: 1000,
                    proration: 2,
                    initial: 3,
                    table: 1
                },
                {
                    label: 'j.236M NT',
                    damage: 1200,
                    proration: 2,
                    initial: 3,
                    table: 1
                },
                {
                    label: 'j.236H NT',
                    damage: 1300,
                    proration: 2,
                    initial: 3,
                    table: 1
                },
                {
                    label: '214L NT',
                    damage: [500, 500],
                    proration: [1, 1],
                    initial: 1,
                    table: 0
                },
                {
                    label: '214M NT',
                    damage: [350, 350, 350, 350],
                    proration: [1, 0, 0, 1],
                    initial: 1,
                    table: 0
                },
                {
                    label: '214H NT',
                    damage: [270, 270, 270, 270, 270, 270],
                    proration: [1, 0, 0, 0, 0, 1],
                    initial: 1,
                    table: 0
                },
                {
                    label: 'j.214L NT',
                    damage: [470, 470],
                    proration: [1, 0],
                    initial: 1,
                    table: 0
                },
                {
                    label: 'j.214M NT',
                    damage: [270, 270, 270, 270],
                    proration: [1, 0, 0, 0],
                    initial: 1,
                    table: 0
                },
                {
                    label: 'j.214H NT',
                    damage: [240, 240, 240, 240, 240, 240],
                    proration: [1, 0, 0, 0, 0, 0],
                    initial: 1,
                    table: 0
                },
                {
                    label: '236S NT',
                    damage: [262, 262, 262, 262, 262],
                    proration: [1, 0, 0, 0, 0, 0],
                    initial: 2,
                    table: 1
                },
                {
                    label: 'j.236S NT',
                    damage: [262, 262, 262, 262, 262],
                    proration: [1, 0, 0, 0, 0, 0],
                    initial: 2,
                    table: 1
                }
            ],
            super: [
                {
                    label: '236LM',
                    level: 1,
                    damage: 2050,
                    minimum: 770,
                    DHC: true
                },
                {
                    label: '236LM 8',
                    level: 1,
                    damage: 2214,
                    minimum: 810,
                    DHC: true
                },
                {
                    label: 'j.236LM',
                    level: 1,
                    damage: 2050,
                    minimum: 770
                },
                {
                    label: 'j.236LM 2',
                    level: 1,
                    damage: 2050,
                    minimum: 750
                },
                {
                    label: '236HS',
                    level: 1,
                    damage: 2214,
                    minimum: 810
                },
                {
                    label: '214LM',
                    level: 3,
                    damage: 4259,
                    minimum: 1759
                }
            ],
            assist: {
                damage: [200, 140, 140, 140, 140],
                proration: [2, 0, 0, 0, 0],
                initial: 3,
                table: 1
            }
        },
        NPA: {
            label: 'Nappa',
            normal: [
                {
                    label: '5L',
                    damage: 400,
                    proration: 1,
                    initial: 2,
                    table: 1
                },
                {
                    label: '5LL',
                    damage: 700,
                    proration: 1,
                    initial: 1,
                    table: 0
                },
                {
                    label: '5LLL',
                    damage: 1000,
                    proration: 1,
                    initial: 1,
                    table: 0
                },
                {
                    label: '2L',
                    damage: 400,
                    proration: 1,
                    initial: 2,
                    table: 1
                },
                {
                    label: '5M',
                    damage: 700,
                    proration: 1,
                    initial: 1,
                    table: 0
                },
                {
                    label: '2M',
                    damage: 700,
                    proration: 1,
                    initial: 1,
                    table: 0
                },
                {
                    label: '5H',
                    damage: 850,
                    proration: 1,
                    initial: 1,
                    table: 0
                },
                {
                    label: '2H',
                    damage: 850,
                    proration: 1,
                    initial: 1,
                    table: 0
                },
                {
                    label: '5S',
                    damage: [450, 800],
                    proration: [1, 1],
                    initial: 2,
                    table: 1
                },
                {
                    label: '5S(1)',
                    damage: 450,
                    proration: 1,
                    initial: 2,
                    table: 1
                },
                {
                    label: 'j.L',
                    damage: 400,
                    proration: 1,
                    initial: 2,
                    table: 1
                },
                {
                    label: 'j.M',
                    damage: 700,
                    proration: 1,
                    initial: 2,
                    table: 1
                },
                {
                    label: 'j.H',
                    damage: 850,
                    proration: 1,
                    initial: 2,
                    table: 1
                },
                {
                    label: 'j.2H',
                    damage: [650, 650],
                    proration: [1, 0],
                    initial: 2,
                    table: 1
                },
                {
                    label: 'j.S NT',
                    damage: 800,
                    proration: 2,
                    initial: 3,
                    table: 2
                }
            ],
            special: [
                {
                    label: '236L NT',
                    damage: 1200,
                    proration: 2,
                    initial: 3,
                    table: 1
                },
                {
                    label: '236M NT',
                    damage: [700, 700],
                    proration: [1, 1],
                    initial: 3,
                    table: 1
                },
                {
                    label: '236H NT',
                    damage: [800, 1000],
                    proration: [1, 1],
                    initial: 3,
                    table: 1
                },
                {
                    label: '236[L] NT',
                    damage: 1300,
                    proration: 2,
                    initial: 3,
                    table: 1
                },
                {
                    label: '236[M] NT',
                    damage: [700, 1200],
                    proration: [1, 1],
                    initial: 3,
                    table: 1
                },
                {
                    label: '236[H] NT',
                    damage: [800, 1300],
                    proration: [1, 1],
                    initial: 3,
                    table: 1
                },
                {
                    label: '214L'
                },
                {
                    label: '214M'
                },
                {
                    label: '214H'
                },
                {
                    label: 'SB Claw NT',
                    damage: 700,
                    proration: 1,
                    initial: 2,
                    table: 1
                },
                {
                    label: 'SB Slide NT',
                    damage: 600,
                    proration: 1,
                    initial: 2,
                    table: 1
                },
                {
                    label: 'SB Spit NT',
                    damage: 400,
                    proration: 1,
                    initial: 2,
                    table: 1
                },
                {
                    label: 'SB Hug NT',
                    damage: [0, 1200],
                    proration: [0, 1],
                    initial: 2,
                    table: 1
                },
                {
                    label: '236S NT',
                    damage: 1100,
                    proration: 1,
                    initial: 2,
                    table: 1
                },
                {
                    label: 'j.236S NT',
                    damage: 1100,
                    proration: 1,
                    initial: 2,
                    table: 1
                },
                {
                    label: '214S NT',
                    damage: [500, 600],
                    proration: [1, 1],
                    initial: 3,
                    table: 1
                }
            ],
            super: [
                {
                    label: '236LM',
                    level: 1,
                    damage: 2300,
                    minimum: 805,
                    DHC: true
                },
                {
                    label: '214LM',
                    level: 3,
                    damage: 4278,
                    minimum: 1778
                }
            ],
            assist: {
                damage: 850,
                proration: 2,
                initial: 3,
                table: 1
            }
        }
    }
};