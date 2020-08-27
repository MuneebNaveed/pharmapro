// @flow
import {
    SET_ROUTES_POWERS,
    SET_LOADED_ROUTES_POWERS,
    SET_ROLES,
    SET_ACTIVE_ROLE,
    REMOVE_ALL_ROLES,
    REMOVE_ALL_ROUTE_POWERS,
    SET_LOADED_ROLES,
    SET_CONTACTS,
} from './constants';

export const setRoutesPowers = (routesPowers) => ({
    type: SET_ROUTES_POWERS,
    payload: routesPowers,
});

export const setLoadedRoutesPowers = (key, value) => ({
    type: SET_LOADED_ROUTES_POWERS,
    payload: { [key]: value },
});

export const removeAllRoutePowers = () => ({
    type: REMOVE_ALL_ROUTE_POWERS,
});

export const setRoles = (roles) => ({
    type: SET_ROLES,
    payload: roles,
});

export const setLoadedRoles = (key, value) => ({
    type: SET_LOADED_ROLES,
    payload: { [key]: value },
});

export const removeAllRoles = () => ({
    type: REMOVE_ALL_ROLES,
});

export const setActiveRole = (activeRole) => ({
    type: SET_ACTIVE_ROLE,
    payload: activeRole,
});

export const setContacts = (contacts) => ({
    type: SET_CONTACTS,
    payload: contacts,
});
