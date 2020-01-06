module.exports = {
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
            label: 'j.LLL Smash!',
            damage: 1000,
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
            label: 'j.H Smash!',
            damage: 1000,
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
            proration: 2,
            initial: 3,
            dhc: true
        },
        {
            label: 'j.236LM',
            level: 1,
            damage: 2415,
            proration: 2,
            initial: 3,
            minimum: 815
        },
        {
            label: '236HS',
            level: 1,
            damage: 1995,
            proration: 2,
            initial: 3,
            minimum: 799
        },
        {
            label: '214LM',
            level: 3,
            damage: 4108,
            minimum: 1672,
            dhc: true
        },
        {
            label: 'j.214LM',
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
};