export const createAction = (type, payload) => ({
    type,
    payload
});


export const APP_ACTION_TYPES = {
    SET_MENU_OPEN: 'SET_MENU_OPEN',
    SET_SELECTED_ALGO: 'SET_SELECTED_ALGO',
    SET_SORTING_IN_PROGRESS: 'SET_SORTING_IN_PROGRESS'
}
