import { createContext, useReducer } from 'react';
import { APP_ACTION_TYPES, createAction } from './app.context.helper';

const defaultSortArray = [8, 5, 2, 9, 6, 3, 11, 10];

const INITIAL_STATE = {
    menuOpen: false,
    selectedAlgo: null,
    arrayToSort: defaultSortArray
}

export const AppContext = createContext({
    ...INITIAL_STATE,
    toggleMenuOpen: () => { },
    setSelectedAlgo: () => { },
});

const appReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case APP_ACTION_TYPES.SET_MENU_OPEN:
            return {
                ...state,
                menuOpen: payload
            };
        case APP_ACTION_TYPES.SET_SELECTED_ALGO:
            return {
                ...state,
                selectedAlgo: payload
            }
        default:
            return state;
    }
}

export const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(appReducer, INITIAL_STATE);
    const { menuOpen, selectedAlgo, arrayToSort } = state;

    const toggleMenuOpen = () => {
        dispatch(createAction(APP_ACTION_TYPES.SET_MENU_OPEN, !menuOpen));
    }

    const setSelectedAlgo = (algoName) => {
        dispatch(createAction(APP_ACTION_TYPES.SET_SELECTED_ALGO, algoName));
    }

    const value = {
        menuOpen,
        toggleMenuOpen,
        selectedAlgo,
        setSelectedAlgo,
        arrayToSort
    }

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
