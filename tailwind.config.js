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
            height: {//this is used by my profile
                "102": "36rem"
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
                'tw': '#1DA1F2',
                darkest: "#011627",
                owl: "#1D3B53",
                success: "#ADDB67",
                grey: "#D6DEEB",
                cursor: '#80A4C2',
                white: '#ffffff',
                danger: '#FF2C83',
                ln: '#0077B5', //linkedin
                al: {//appslab
                    'primary': '#05a1ab',
                    'secondary': '#05C8D7',
                },
                gray: {
                    100: '#f7fafc',
                    200: '#edf2f7',
                    300: '#e2e8f0',
                    400: '#cbd5e0',
                    500: '#a0aec0',
                    600: '#718096',
                    700: '#4a5568',
                    800: '#2d3748',
                    900: '#1a202c',
                },
            },
        },
        minWidth:{
            '7xl': '86em'
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
        outline: ['focus', 'responsive', 'hover', 'active']
    },
    plugins: []
};
