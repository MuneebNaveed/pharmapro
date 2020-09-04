import { combineReducers } from 'redux';
import settingsReducer from './settings';
import contactsReducer from './contacts/reducers';

const appReducer = combineReducers({
    settings: settingsReducer,
    contacts: contactsReducer,
});

export default appReducer;
