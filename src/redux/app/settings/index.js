import rolesReducer from './roles/reducers';
import { combineReducers } from 'redux';

const settingsReducer = combineReducers({
    roles: rolesReducer,
});

export default settingsReducer;
