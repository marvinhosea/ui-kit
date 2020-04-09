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
                'dark': '#363a42',
                'grey': {
                    'darkest': '#626471',
                    'darker': '#878c98',
                    'dark': '#adb4c2',
                    'normal': '#d5d9e3',
                    'light': '#dee1e8',
                    'lighter': '#eaebef',
                },
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
                'grn': '#34e2a7',
                'fb': '#1778F2',
                'tw': '#4183C4',
                'white': '#ffffff',
                'success': '#33DD66',
                'primary': {
                    'dark': '#2d4add'
                },
                'accent': {
                    lighter: "#dfd5a4",
                    dark: "#b09b66"
                },
                'loader': '#1D9AF2'
            },
        },
        container: {
            center: true,
            padding: '2rem'
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
}