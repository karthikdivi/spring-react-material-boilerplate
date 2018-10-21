import { USER_LANGUAGE_CHANGE, USER_TOGGLE_MAP } from '../actions/types';

const initialState = {
    loginTime: new Date(),
    userFoo: [],
    userLanguage: 'en',
    showMap: true
}

export default function (state = initialState, action) {
    switch (action.type) {
        case USER_LANGUAGE_CHANGE:
            return {
                ...state,
                userLanguage: action.payload
            }
        case USER_TOGGLE_MAP:
            return {
                ...state,
                showMap: !state.showMap
            }
        default:
            return state;
    }
}