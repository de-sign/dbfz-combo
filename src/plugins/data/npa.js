// Complete
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
            ki: [12, 6],
            damage: [450, 800],
            proration: [1, 1],
            initial: 2,
            table: 1
        },
        {
            label: 'S(1)',
            ki: 12,
            damage: 450,
            proration: 1,
            initial: 2,
            table: 1
        },
        {
            label: 'S(2)',
            ki: 6,
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
            ki: [12, 12],
            damage: [650, 650],
            proration: [1, 1],
            initial: 2,
            table: 1
        },
        {
            label: 'j.S',
            ki: 6,
            damage: 800,
            proration: 2,
            initial: 3,
            table: 1
        }
    ],
    special: [
        {
            label: '236L',
            damage: 1200,
            proration: 2,
            initial: 3,
            table: 2
        },
        {
            label: '236M',
            ki: [6, 6],
            damage: [700, 900],
            proration: [1, 1],
            initial: 3,
            table: 2
        },
        {
            label: '236H',
            ki: [-100],
            damage: [800, 1000],
            proration: [1, 1],
            initial: 3,
            table: 2
        },
        {
            label: '236[L]',
            damage: 1300,
            proration: 2,
            initial: 3,
            table: 2
        },
        {
            label: '236[M]',
            damage: [700, 1200],
            proration: [1, 1],
            initial: 3,
            table: 2
        },
        {
            label: '236[H]',
            ki: [-100],
            damage: [800, 1300],
            proration: [1, 1],
            initial: 3,
            table: 2
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
            label: 'SB Claw',
            damage: 700,
            proration: 1,
            initial: 2,
            table: 1
        },
        {
            label: 'SB Slide',
            damage: 600,
            proration: 1,
            initial: 2,
            table: 1
        },
        {
            label: 'SB Spit',
            damage: 400,
            proration: 1,
            initial: 2,
            table: 1
        },
        {
            label: 'SB Hug',
            damage: [0, 1200],
            proration: [0, 1],
            initial: 2,
            table: 1
        },
        {
            label: 'SB Hug Restand',
            damage: [0, 1334],
            proration: [0, 1]
        },
        {
            label: '236S',
            ki: 12,
            damage: 1100,
            proration: 1,
            initial: 2,
            table: 1
        },
        {
            label: 'j.236S',
            ki: 12,
            damage: 1100,
            proration: 1,
            initial: 2,
            table: 1
        },
        {
            label: '214S',
            ki: [6, 6],
            damage: [500, 600],
            proration: [1, 1],
            initial: 3,
            table: 2
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
            initial: 2,
            table: 1,
            dhc: true
        },
        {
            label: '214LM',
            level: 3,
            ki: [-300],
            damage: [780, 260, 260, 260, 260, 260, 260, 260, 260, 260, 260, 260, 260, 260, 238, 269],
            minimum: [608, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78, 78],
            proration: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            initial: 1,
            table: 1,
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