// NT
module.exports = {
    label: 'Android 16',
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
            label: '5LLL (NT)',
            ki: 12,
            damage: 1000,
            proration: 1,
            initial: 2,
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
            label: 'S',
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
            label: 'j.2H (NT)',
            ki: 12,
            damage: 850,
            proration: 1,
            initial: 3,
            table: 2
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
            ki: 15,
            damage: 1500,
            proration: 1,
            initial: 3,
            table: 2
        },
        {
            label: '236M (NT)',
            ki: 15,
            damage: 1550,
            proration: 1,
            initial: 3,
            table: 2
        },
        {
            label: '236H (NT)',
            ki: -100,
            damage: 1550,
            proration: 1,
            initial: 3,
            table: 2
        },
        {
            label: 'j.236L (NT)',
            ki: 15,
            damage: 1400,
            proration: 1,
            initial: 4,
            table: 2
        },
        {
            label: 'j.236M (NT)',
            ki: [15, 15],
            damage: [1400, 200],
            proration: [1, 1],
            initial: 3,
            table: 2
        },
        {
            label: 'j.236H (NT)',
            ki: [-100],
            damage: [1400, 200],
            proration: [1, 1],
            initial: 3,
            table: 2
        },
        {
            label: '214L (NT)',
            ki: 15,
            damage: 1400,
            proration: 1,
            initial: 4,
            table: 2
        },
        {
            label: '214M (NT)',
            ki: 15,
            damage: 1400,
            proration: 1,
            initial: 4,
            table: 2
        },
        {
            label: '214H (NT)',
            ki: [-100],
            damage: [300, 1500],
            proration: [1, 1],
            initial: 3,
            table: 2
        },
        {
            label: 'j.214L (NT)',
            ki: 15,
            damage: 1400,
            proration: 1,
            initial: 4,
            table: 2
        },
        {
            label: 'j.214M (NT)',
            ki: 15,
            damage: 1400,
            proration: 1,
            initial: 4,
            table: 2
        },
        {
            label: 'j.214H (NT)',
            ki: -100,
            damage: 1800,
            proration: 1,
            initial: 3,
            table: 2
        },
        {
            label: '236S (NT)',
            ki: [2.5, 2.5, 2.5, 2.5],
            damage: [270, 270, 270, 270],
            proration: [1, 0, 0, 0, 0],
            initial: 2,
            table: 1
        },
        {
            label: '214S (NT)',
            ki: [1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5],
            damage: [150, 150, 150, 150, 150, 150, 150, 150],
            proration: [1, 0, 0, 0, 0],
            initial: 2,
            table: 1
        }
    ],
    super: [
        {
            label: '236LM (NT)',
            level: 1,
            ki: [-100],
            damage: [322, 322, 322, 322, 322, 322, 322, 322],
            minimum: [99, 99, 99, 99, 99, 99, 99, 99, 99, 99],
            proration: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            initial: 2,
            table: 1,
            dhc: true
        },
        {
            label: 'j.236LM (NT)',
            level: 1,
            ki: [-100],
            damage: [322, 322, 322, 322, 322, 322, 322, 322],
            minimum: [99, 99, 99, 99, 99, 99, 99, 99, 99, 99],
            proration: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            initial: 2,
            table: 1
        },
        {
            label: '214LM (NT)',
            level: 3,
            ki: [-300],
            damage: [4816],
            minimum: [1716],
            proration: [1],
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