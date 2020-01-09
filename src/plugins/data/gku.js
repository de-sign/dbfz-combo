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
            damage: 600,
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
            damage: 600,
            proration: 1,
            initial: 2,
            table: 1
        }
    ],
    special: [
        {
            label: '236L (NT)',
            ki: 12,
            damage: 1200,
            proration: 2,
            initial: 3,
            table: 2
        },
        {
            label: '236M (NT)',
            ki: 12,
            damage: 1300,
            proration: 2,
            initial: 3,
            table: 2
        },
        {
            label: '236H (NT)',
            ki: -100,
            damage: 1400,
            proration: 2,
            initial: 3,
            table: 2
        },
        {
            label: 'j.236L (NT)',
            ki: 12,
            damage: 1000,
            proration: 2,
            initial: 3,
            table: 1
        },
        {
            label: 'j.236M (NT)',
            ki: 12,
            damage: 1200,
            proration: 2,
            initial: 3,
            table: 1
        },
        {
            label: 'j.236H (NT)',
            ki: -100,
            damage: 1300,
            proration: 2,
            initial: 3,
            table: 1
        },
        {
            label: '214L',
            ki: [6, 6],
            damage: [500, 500],
            proration: [1, 1],
            initial: 1,
            table: 0
        },
        {
            label: '214M',
            ki: [6, 6, 6, 6],
            damage: [350, 350, 350, 350],
            proration: [1, 0, 0, 1],
            initial: 1,
            table: 0
        },
        {
            label: '214H',
            ki: [-100],
            damage: [270, 270, 270, 270, 270, 270],
            proration: [1, 0, 0, 0, 0, 1],
            initial: 1,
            table: 0
        },
        {
            label: 'j.214L',
            ki: [6, 6],
            damage: [500, 500],
            proration: [1, 0],
            initial: 1,
            table: 0
        },
        {
            label: 'j.214M',
            ki: [6, 6, 6, 6],
            damage: [300, 300, 300, 300],
            proration: [1, 0, 0, 0],
            initial: 1,
            table: 0
        },
        {
            label: 'j.214H',
            ki: [-100],
            damage: [270, 270, 270, 270, 270, 270],
            proration: [1, 0, 0, 0, 0, 0],
            initial: 1,
            table: 0
        },
        {
            label: '236S',
            ki: [2.4, 2.4, 2.4, 2.4, 2.4],
            damage: [262, 262, 262, 262, 262],
            proration: [1, 0, 0, 0, 0, 0],
            initial: 2,
            table: 1
        },
        {
            label: 'j.236S (NT)',
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
            damage: [250, 250, 250, 250, 250, 250, 250, 250, 250, 250],
            minimum: [77, 77, 77, 77, 77, 77, 77, 77, 77, 77],
            proration: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            initial: 2,
            table: 1,
            dhc: true
        },
        {
            label: '236LM [8]',
            level: 1,
            ki: [-100],
            damage: [270, 270, 270, 270, 270, 270, 270, 270, 270, 270],
            minimum: [81, 81, 81, 81, 81, 81, 81, 81, 81, 81],
            proration: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            initial: 2,
            table: 1,
            dhc: true
        },
        {
            label: 'j.236LM',
            level: 1,
            ki: [-100],
            damage: [250, 250, 250, 250, 250, 250, 250, 250, 250, 250],
            minimum: [77, 77, 77, 77, 77, 77, 77, 77, 77, 77],
            proration: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            initial: 2,
            table: 1
        },
        {
            label: 'j.236LM [2]',
            level: 1,
            ki: [-100],
            damage: [250, 250, 250, 250, 250, 250, 250, 250, 250, 250],
            minimum: [75, 75, 75, 75, 75, 75, 75, 75, 75, 75],
            proration: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            initial: 2,
            table: 1
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
            label: 'j.236HS',
            level: 1,
            ki: [-100],
            damage: [270, 270, 270, 270, 270, 270, 270, 270, 270, 270],
            minimum: [81, 81, 81, 81, 81, 81, 81, 81, 81, 81],
            proration: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            initial: 2,
            table: 1
        },
        {
            label: '214LM',
            level: 3,
            ki: [-300],
            damage: [500, 420, 637, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130],
            minimum: [100, 84, 159, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59],
            proration: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            initial: 1,
            table: 1,
            dhc: true
        }
    ],
    assist: {
        damage: [200, 200, 200, 200, 200],
        proration: [2, 0, 0, 0, 0],
        initial: 3,
        table: 1
    }
};