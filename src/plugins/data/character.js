module.exports = {
    label: 'Goku SSJ',
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
            ki: 12,
            damage: 1000,
            proration: 1,
            initial: 1,
            table: 0
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
            label: 'S',
            ki: 6,
            damage: 0,
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
            damage: 0,
            proration: 1,
            initial: 2,
            table: 1
        }
    ],
    special: [
        {
            label: '236L',
            ki: 12,
            damage: 0,
            proration: 1,
            initial: 2,
            table: 1
        },
        {
            label: '236M',
            ki: 12,
            damage: 0,
            proration: 2,
            initial: 3,
            table: 2
        },
        {
            label: '236H',
            ki: -100,
            damage: 0,
            proration: 2,
            initial: 3,
            table: 2
        },
        {
            label: '214L',
            ki: 0,
            damage: 0,
            proration: 1,
            initial: 2,
            table: 1
        },
        {
            label: '214M',
            ki: 0,
            damage: 0,
            proration: 1,
            initial: 2,
            table: 1
        },
        {
            label: '214H',
            ki: [-100],
            damage: 0,
            proration: 1,
            initial: 2,
            table: 1
        },
        {
            label: '236S',
            ki: [2.4, 2.4, 2.4, 2.4, 2.4],
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
            ki: [-100],
            damage: 0,
            minimum: 0,
            proration: 2,
            initial: 2,
            table: 1,
            dhc: true
        },
        {
            label: '236HS',
            level: 1,
            ki: [-100],
            damage: [270, 270, 270, 270, 270, 270, 270, 270, 270, 270],
            minimum: [81, 81, 81, 81, 81, 81, 81, 81, 81, 81],
            proration: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            initial: 2,
            table: 1
        },
        {
            label: '214LM', // GOKU SSJ3
            level: 3,
            ki: [-300],
            damage: 0,
            minimum: [100, 84, 159, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59],
            proration: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            initial: 1,
            table: 1,
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