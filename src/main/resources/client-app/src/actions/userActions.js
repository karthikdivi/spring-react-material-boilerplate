import { USER_LANGUAGE_CHANGE, USER_TOGGLE_MAP } from './types';

export const userLanguageCHange = (language) => dispatch => {
    console.log(`userLanguageCHange: language: ${language}`);
    dispatch({
        type: USER_LANGUAGE_CHANGE,
        payload: language
    });
}