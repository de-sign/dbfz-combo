module.exports = {
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
            label: '5S(2)',
            damage: 800,
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
            damage: 2300,
            minimum: 805,
            proration: 2,
            initial: 3,
            dhc: true
        },
        {
            label: '214LM',
            level: 3,
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