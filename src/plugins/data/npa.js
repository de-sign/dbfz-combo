module.exports = {
    label: 'Nappa',
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
            damage: [450, 800],
            proration: [1, 1],
            initial: 2,
            table: 1
        },
        {
            label: 'S(1)',
            damage: 450,
            proration: 1,
            initial: 2,
            table: 1
        },
        {
            label: 'S(2)',
            damage: 800,
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
            damage: [650, 650],
            proration: [1, 0],
            initial: 2,
            table: 1
        },
        {
            label: 'j.S (NT)',
            damage: 800,
            proration: 2,
            initial: 3,
            table: 2
        }
    ],
    special: [
        {
            label: '236L (NT)',
            damage: 1200,
            proration: 2,
            initial: 3,
            table: 1
        },
        {
            label: '236M (NT)',
            damage: [700, 700],
            proration: [1, 1],
            initial: 3,
            table: 1
        },
        {
            label: '236H (NT)',
            ki: [-100],
            damage: [800, 1000],
            proration: [1, 1],
            initial: 3,
            table: 1
        },
        {
            label: '236[L] (NT)',
            damage: 1300,
            proration: 2,
            initial: 3,
            table: 1
        },
        {
            label: '236[M] (NT)',
            damage: [700, 1200],
            proration: [1, 1],
            initial: 3,
            table: 1
        },
        {
            label: '236[H] (NT)',
            ki: [-100],
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
            label: '214H',
            damage: 0,
            ki: [-100]
        },
        {
            label: 'SB Claw (NT)',
            damage: 700,
            proration: 1,
            initial: 2,
            table: 1
        },
        {
            label: 'SB Slide (NT)',
            damage: 600,
            proration: 1,
            initial: 2,
            table: 1
        },
        {
            label: 'SB Spit (NT)',
            damage: 400,
            proration: 1,
            initial: 2,
            table: 1
        },
        {
            label: 'SB Hug (NT)',
            damage: [0, 1200],
            proration: [0, 1],
            initial: 2,
            table: 1
        },
        {
            label: '236S (NT)',
            damage: 1100,
            proration: 1,
            initial: 2,
            table: 1
        },
        {
            label: 'j.236S (NT)',
            damage: 1100,
            proration: 1,
            initial: 2,
            table: 1
        },
        {
            label: '214S (NT)',
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
            ki: [-100],
            damage: 2300,
            minimum: 805,
            proration: 2,
            initial: 3,
            dhc: true
        },
        {
            label: '214LM',
            level: 3,
            ki: [-300],
            damage: 4278,
            minimum: 1778,
            dhc: true
        }
    ],
    assist: {
        damage: 850,
        proration: 2,
        initial: 3,
        table: 1
    }
};