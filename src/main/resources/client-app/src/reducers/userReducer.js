import { USER_LANGUAGE_CHANGE } from '../actions/types';

const initialState = {
    loginTime: new Date(),
    userFoo: [],
    userLanguage: 'en'
}

export default function (state = initialState, action) {
    switch (action.type) {
        case USER_LANGUAGE_CHANGE:
            return {
                ...state,
                userLanguage: action.payload
            }
        default:
            return state;
    }
}