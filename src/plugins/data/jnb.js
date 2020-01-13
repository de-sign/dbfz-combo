module.exports = {
    label: 'Janemba',
    normal: [
        {
            label: '5L',
            ki: 5,
            damage: 400,
            proration: 1,
            initial: 2,
            table: 1
        },
        {
            label: '5LL',
            ki: 7,
            damage: 700,
            proration: 1,
            initial: 1,
            table: 0
        },
        {
            label: '5LLL',
            ki: [6, 6],
            damage: [600, 600],
            proration: [1, 0],
            initial: 3,
            table: 2
        },
        {
            label: '2L',
            ki: 5,
            damage: 400,
            proration: 1,
            initial: 2,
            table: 1
        },
        {
            label: '5M',
            ki: 7,
            damage: 700,
            proration: 1,
            initial: 1,
            table: 0
        },
        {
            label: '2M',
            ki: 7,
            damage: 700,
            proration: 1,
            initial: 1,
            table: 0
        },
        {
            label: '5H',
            ki: 12,
            damage: 850,
            proration: 1,
            initial: 1,
            table: 0
        },
        {
            label: '2H',
            ki: 12,
            damage: 850,
            proration: 1,
            initial: 1,
            table: 0
        },
        {
            label: '5S',
            ki: 6,
            damage: 300,
            proration: 1,
            initial: 2,
            table: 1
        },
        {
            label: '2S',
            ki: 6,
            damage: 300,
            proration: 1,
            initial: 2,
            table: 1
        },
        {
            label: 'j.L',
            ki: 5,
            damage: 400,
            proration: 1,
            initial: 2,
            table: 1
        },
        {
            label: 'j.LL',
            ki: 7,
            damage: 700,
            proration: 1,
            initial: 2,
            table: 1
        },
        {
            label: 'j.LLL',
            ki: 12,
            damage: 850,
            proration: 1,
            initial: 2,
            table: 1
        },
        {
            label: 'j.LLL Smash!',
            ki: 12,
            damage: 1000,
            proration: 1,
            initial: 2,
            table: 1
        },
        {
            label: 'j.M',
            ki: 7,
            damage: 700,
            proration: 1,
            initial: 2,
            table: 1
        },
        {
            label: 'j.2M',
            ki: 12,
            damage: 900,
            proration: 1,
            initial: 3,
            table: 2
        },
        {
            label: 'j.H',
            ki: 12,
            damage: 850,
            proration: 1,
            initial: 2,
            table: 1
        },
        {
            label: 'j.H Smash!',
            ki: 12,
            damage: 1000,
            proration: 1,
            initial: 2,
            table: 1
        },
        {
            label: 'j.2H',
            ki: 12,
            damage: 850,
            proration: 1,
            initial: 2,
            table: 1
        },
        {
            label: 'j.S',
            ki: 6,
            damage: 300,
            proration: 1,
            initial: 2,
            table: 1
        }
    ],
    special: [
        {
            label: '22S',
            ki: 12,
            damage: 600,
            proration: 1,
            initial: 3,
            table: 2
        },
        {
            label: 'j.22S',
            ki: 12,
            damage: 600,
            proration: 1,
            initial: 3,
            table: 2
        },
        {
            label: '236L',
            ki: 12,
            damage: 1100,
            proration: 2,
            initial: 3,
            table: 1
        },
        {
            label: '236M',
            ki: 12,
            damage: 1200,
            proration: 2,
            initial: 3,
            table: 1
        },
        {
            label: '236H',
            ki: -100,
            damage: 1300,
            proration: 2,
            initial: 3,
            table: 1
        },
        {
            label: 'j.236L',
            ki: 12,
            damage: 1100,
            proration: 2,
            initial: 3,
            table: 1
        },
        {
            label: 'j.236M',
            ki: 12,
            damage: 1200,
            proration: 2,
            initial: 3,
            table: 1
        },
        {
            label: 'j.236H',
            ki: -100,
            damage: 1300,
            proration: 2,
            initial: 3,
            table: 1
        },
        {
            label: '214L',
            ki: 15,
            damage: 1200,
            proration: 1,
            initial: 3,
            table: 2
        },
        {
            label: '214M',
            ki: 15,
            damage: 1250,
            proration: 1,
            initial: 3,
            table: 2
        },
        {
            label: '214H',
            ki: -100,
            damage: 1300,
            proration: 1,
            initial: 3,
            table: 2
        },
        {
            label: 'j.214L',
            ki: [4, 4, 4],
            damage: [350, 350, 350],
            proration: [2, 0, 0],
            initial: 3,
            table: 1
        },
        {
            label: 'j.214M',
            ki: [4, 4, 4],
            damage: [350, 350, 350],
            proration: [2, 0, 0],
            initial: 3,
            table: 1
        },
        {
            label: 'j.214H',
            ki: [-100],
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
            ki: [-100],
            damage: 2415,
            minimum: 815,
            proration: 2,
            initial: 3,
            dhc: true
        },
        {
            label: 'j.236LM',
            level: 1,
            ki: [-100],
            damage: 2415,
            minimum: 815,
            proration: 2,
            initial: 3
        },
        {
            label: '236HS',
            level: 1,
            ki: [-100],
            damage: 1995,
            minimum: 799,
            proration: 2,
            initial: 3
        },
        {
            label: '214LM',
            level: 3,
            ki: [-300],
            damage: 4108,
            minimum: 1672,
            dhc: true
        },
        {
            label: 'j.214LM',
            level: 3,
            ki: [-300],
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