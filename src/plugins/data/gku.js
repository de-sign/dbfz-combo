module.exports = {
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
            label: 'j.LL',
            damage: 700,
            proration: 1,
            initial: 2,
            table: 1
        },
        {
            label: 'j.LLL',
            damage: 850,
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
            dhc: true
        },
        {
            label: '236LM [8]',
            level: 1,
            damage: 2214,
            minimum: 810,
            dhc: true
        },
        {
            label: 'j.236LM',
            level: 1,
            damage: 2050,
            minimum: 770
        },
        {
            label: 'j.236LM [2]',
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
            minimum: 1759,
            dhc: true
        }
    ],
    assist: {
        damage: [200, 140, 140, 140, 140],
        proration: [2, 0, 0, 0, 0],
        initial: 3,
        table: 1
    }
};