import { SET_CONTACTS } from './constants';

export const setContacts = (contacts) => ({
    type: SET_CONTACTS,
    payload: contacts,
});
