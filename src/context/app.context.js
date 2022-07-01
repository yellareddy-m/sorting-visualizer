import { createContext, useReducer } from 'react';
import { APP_ACTION_TYPES, createAction } from './app.context.helper';

const defaultSortArray = [8, 5, 2, 9, 6, 3, 11, 10];

const INITIAL_STATE = {
    menuOpen: false,
    selectedAlgo: null,
    arrayToSort: defaultSortArray,
    sortingInProgress: false
}

export const AppContext = createContext({
    ...INITIAL_STATE,
    toggleMenuOpen: () => { },
    setSelectedAlgo: () => { },
    setSortingInProgress: () => { },
    setArrayToSort: () => { }
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
        case APP_ACTION_TYPES.SET_SORTING_IN_PROGRESS:
            return {
                ...state,
                sortingInProgress: payload
            }
        case APP_ACTION_TYPES.SET_ARRAY_TO_SORT:
            return {
                ...state,
                arrayToSort: payload
            }
        default:
            return state;
    }
}

export const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(appReducer, INITIAL_STATE);
    const { menuOpen, selectedAlgo, arrayToSort, sortingInProgress } = state;

    const toggleMenuOpen = () => {
        dispatch(createAction(APP_ACTION_TYPES.SET_MENU_OPEN, !menuOpen));
    }

    const setSelectedAlgo = (algoName) => {
        dispatch(createAction(APP_ACTION_TYPES.SET_SELECTED_ALGO, algoName));
    }

    const setSortingInProgress = (value) => {
        dispatch(createAction(APP_ACTION_TYPES.SET_SORTING_IN_PROGRESS, value));
    }

    const setArrayToSort = (array) => {
        dispatch(createAction(APP_ACTION_TYPES.SET_ARRAY_TO_SORT, array));
    }

    const value = {
        menuOpen,
        toggleMenuOpen,
        selectedAlgo,
        setSelectedAlgo,
        sortingInProgress,
        setSortingInProgress,
        arrayToSort,
        setArrayToSort
    }

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
