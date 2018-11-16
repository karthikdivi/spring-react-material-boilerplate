import { USER_LANGUAGE_CHANGE } from './types';

export const userLanguageCHange = (language) => dispatch => {
    console.log(`userLanguageCHange: language: ${language}`);
    dispatch({
        type: USER_LANGUAGE_CHANGE,
        payload: language
    });
}