module.exports = {
    theme: {
        extend:{
            borderRadius: {
                'two': '3em'
            },
            inset: {
                '-1': '-0.25rem',
                '-2': '-2.3rem',
                '-4': '-4.6rem',
                '-6': '-6.9rem',
                '-8': '-9.2rem',
            },
            colors: {
                'afn': {
                    'dark-primary' : '#001C48',
                    'primary' : '#349D0A',
                    'text': '#EEF7FF',
                    'accent': '#F32929',
                    'light-primary' : '#75FF3E',
                },
                'transparent': 'transparent',
                'dnk' : {
                    'darker' : "#1D2538",
                    'dark' : '#354056',
                    'accent' : '#232126'
                },
                'gm': {
                    'dark': '#D44638',
                    'light': '#ff574d',
                },
                'owl': '#070335',
                'fb': '#1778F2',
                'tw': '#4183C4',
            },
        },
        minWidth:{
            '7xl': '86em'
        },
        container: {
            center: true,
            // padding: '2rem'
        },
        fontFamily: {
            display: ['Lora', 'Karla'],
            body: ['Lora', 'Karla']
        },
        screens: {
            'xs': '380px',
            'sm': '540px',
            'md': '720px',
            'lg': '920px',
            'xl': '1040px'
        }
    },
    variants: {
        backgroundColor: ['responsive', 'hover', 'focus', 'group-hover', 'active'],
        boarderColor: ['responsive', 'hover', 'focus', 'group-hover', 'active'],
        borderRadius: ['responsive', 'hover', 'focus', 'group-hover', 'active'],
        width: ['responsive', 'hover', 'focus', 'group-hover', 'active'],
    },
    plugins: []
};