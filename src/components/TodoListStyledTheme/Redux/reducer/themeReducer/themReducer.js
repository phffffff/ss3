import themes from "../../../Themes/Themes";

const initState = {
    currentTheme: {
        ...themes[0].theme,
    },
    themes: [
        ...themes
    ],
}

const themReducer = (state = initState, action) => {
    let newTheme = {};
    const newListThemes = [...state.themes];
    switch (action.type) {
        case "CHANGE_THEME":
            newTheme = newListThemes && newListThemes.length && newListThemes.find((theme) => {
                return theme.id === action.payload;
            });

            return {
                ...state,
                currentTheme: { ...newTheme.theme }
            }

        default:
            return { ...state }
    }
};

export default themReducer;