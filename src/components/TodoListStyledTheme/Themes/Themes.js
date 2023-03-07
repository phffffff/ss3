const darkTheme = {
    bgColor: '#343a40',
    color: '#fff',
    borderButton: '1px solid #fff',
    borderRadius: 'none',
    hoverTextColor: '#343a40',
    hoverBgColor: '#fff',
    borderColor: '#343a40'
}

const lightTheme = {
    backgroundColor: '#fff',
    color: '#7952b3',
    borderButton: '1px solid #7952b3',
    borderRadius: 'none',
    hoverTextColor: '#fff',
    hoverBgColor: '#7952b3',
    borderColor: '#7952b3'
}
const primaryTheme = {
    backgroundColor: '#fff',
    color: '#343a40',
    borderButton: '1px solid #343a40',
    borderRadius: 'none',
    hoverTextColor: '#fff',
    hoverBgColor: '#343a40',
    borderColor: '#343a40'
}

const themes = [
    {
        id: '1',
        name: 'DarkTheme',
        theme: darkTheme,
    },
    {
        id: '2',
        name: 'LightTheme',
        theme: lightTheme,
    },
    {
        id: '3',
        name: 'PrimaryTheme',
        theme: primaryTheme,
    },
]

export default themes;