// @flow
import {
    SET_ROUTES_POWERS,
    SET_ROLES,
    REMOVE_ALL_ROLES,
    SET_ACTIVE_ROLE,
    REMOVE_ALL_ROUTE_POWERS,
    SET_LOADED_ROUTES_POWERS,
    SET_LOADED_ROLES,
} from './constants';

const initialState = {
    loadedRoutesPowers: {},
    routesPowers: [],
    loadedRoles: {},
    roles: [],
    activeRole: '',
};

const rolesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADED_ROUTES_POWERS: {
            const newLoadedRoutesPowers = { ...state.loadedRoutesPowers, ...action.payload };
            return { ...state, loadedRoutesPowers: newLoadedRoutesPowers };
        }
        case SET_ROUTES_POWERS: {
            return { ...state, routesPowers: action.payload };
        }
        case REMOVE_ALL_ROUTE_POWERS: {
            return { ...state, routesPowers: initialState.routesPowers };
        }
        case SET_ROLES: {
            return { ...state, roles: action.payload };
        }
        case SET_LOADED_ROLES: {
            const newLoadedRoles = { ...state.loadedRoles, ...action.payload };
            return { ...state, loadedRoles: newLoadedRoles };
        }
        case REMOVE_ALL_ROLES: {
            return { ...state, roles: initialState.roles };
        }
        case SET_ACTIVE_ROLE: {
            return { ...state, activeRole: action.payload };
        }
        default: {
            return state;
        }
    }
};

export default rolesReducer;
