// @flow
import {
    SET_ROUTES_POWERS,
    SET_ROLES,
    REMOVE_ALL_ROLES,
    SET_ACTIVE_ROLE,
    REMOVE_ALL_ROUTE_POWERS,
    SET_LOADED_ROUTES_POWERS,
    SET_LOADED_ROLES,
    SET_CONTACTS,
} from './constants';

const INIT_STATE = {
    Dashboard: {},
    Settings: {
        Roles: {
            loadedRoutesPowers: {},
            routesPowers: [],
            loadedRoles: {},
            roles: [],
            activeRole: '',
        },
    },
    Contacts: {
        contacts: [],
    },
};

const App = (state = INIT_STATE, action) => {
    switch (action.type) {
        case SET_LOADED_ROUTES_POWERS: {
            const newSettings = {
                ...state.Settings,
                Roles: {
                    ...state.Settings.Roles,
                    loadedRoutesPowers: {
                        ...state.Settings.Roles.loadedRoutesPowers,
                        ...action.payload,
                    },
                },
            };
            return { ...state, Settings: newSettings };
        }
        case SET_ROUTES_POWERS: {
            const newSettings = {
                ...state.Settings,
                Roles: {
                    ...state.Settings.Roles,
                    routesPowers: action.payload,
                },
            };
            return { ...state, Settings: newSettings };
        }
        case REMOVE_ALL_ROUTE_POWERS: {
            const newSettings = {
                ...state.Settings,
                Roles: {
                    ...state.Settings.Roles,
                    routesPowers: INIT_STATE.Settings.Roles.routesPowers,
                },
            };
            return { ...state, Settings: newSettings };
        }
        case SET_ROLES: {
            const newSettings = {
                ...state.Settings,
                Roles: {
                    ...state.Settings.Roles,
                    roles: action.payload,
                },
            };
            return { ...state, Settings: newSettings };
        }
        case SET_LOADED_ROLES: {
            const newSettings = {
                ...state.Settings,
                Roles: {
                    ...state.Settings.Roles,
                    loadedRoles: {
                        ...state.Settings.Roles.loadedRoles,
                        ...action.payload,
                    },
                },
            };
            return { ...state, Settings: newSettings };
        }
        case REMOVE_ALL_ROLES: {
            const newSettings = {
                ...state.Settings,
                Roles: {
                    ...state.Settings.Roles,
                    roles: INIT_STATE.Settings.Roles.roles,
                },
            };
            return { ...state, Settings: newSettings };
        }
        case SET_ACTIVE_ROLE: {
            const newSettings = {
                ...state.Settings,
                Roles: {
                    ...state.Settings.Roles,
                    activeRole: action.payload,
                },
            };
            return { ...state, Settings: newSettings };
        }
        case SET_CONTACTS: {
            const newContacts = {
                ...state.Contacts,
                contacts: action.payload,
            };
            return { ...state, Contacts: newContacts };
        }
        default:
            return { ...state };
    }
};

export default App;
