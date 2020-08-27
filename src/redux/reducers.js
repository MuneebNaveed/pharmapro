// @flow

import { combineReducers } from 'redux';
import Layout from './layout/reducers';
import Auth from './auth/reducers';
import AppMenu from './appMenu/reducers';
import App from './app/reducers';

export default combineReducers({
    Auth,
    AppMenu,
    Layout,
    App,
});
