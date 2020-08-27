import React, { useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';

import {
    setRoutesPowers,
    setRoles,
    setActiveRole,
    removeAllRoles,
    removeAllRoutePowers,
    setLoadedRoutesPowers,
    setLoadedRoles,
} from '../../../redux/app/actions';

import Logger from '../../../helpers/Logger';
import SideBar from './SideBar';
import RoutesPowers from './RoutesPowers';

const logger = Logger.get('Roles');

const data = {
    powers: {
        admin: [
            {
                route: 'dashboard',
                default: true,
                powers: [
                    {
                        isChecked: false,
                        content: 'Review Daily Revenue',
                    },
                    {
                        isChecked: true,
                        content: 'Review Daily Orders',
                    },
                    {
                        isChecked: false,
                        content: 'Review Daily Profits',
                    },
                    {
                        isChecked: false,
                        content: 'Review Orders by Category',
                    },
                    {
                        isChecked: false,
                        content: 'Review Orders by Product',
                    },
                    {
                        isChecked: false,
                        content: 'Authorize Weekly, Monthly, and Yearly Audit',
                    },
                ],
            },
            {
                route: 'contacts',
                powers: [
                    {
                        isChecked: false,
                        content: 'Review All Contacts',
                    },
                    {
                        isChecked: false,
                        content: 'Review Patients',
                    },
                    {
                        isChecked: false,
                        content: 'Review Vendors',
                    },
                    {
                        isChecked: false,
                        content: 'Review Employees',
                    },
                    {
                        isChecked: false,
                        content: 'Create All Contacts',
                    },
                    {
                        isChecked: false,
                        content: 'Create Patients',
                    },
                    {
                        isChecked: false,
                        content: 'Create Vendors',
                    },
                    {
                        isChecked: false,
                        content: 'Create Employees',
                    },
                    {
                        isChecked: false,
                        content: 'Edit All Contacts',
                    },
                    {
                        isChecked: false,
                        content: 'Edit Patients',
                    },
                    {
                        isChecked: false,
                        content: 'Edit Vendors',
                    },
                    {
                        isChecked: false,
                        content: 'Edit Employees',
                    },
                    {
                        isChecked: false,
                        content: 'Delete All Contacts',
                    },
                    {
                        isChecked: false,
                        content: 'Delete Patients',
                    },
                    {
                        isChecked: false,
                        content: 'Delete Vendors',
                    },
                    {
                        isChecked: false,
                        content: 'Delete Employees',
                    },
                ],
            },
        ],
        cashier: [
            {
                route: 'dashboard',
                default: true,
                powers: [
                    {
                        isChecked: false,
                        content: 'Review Daily Revenue',
                    },
                    {
                        isChecked: true,
                        content: 'Review Daily Orders',
                    },
                    {
                        isChecked: false,
                        content: 'Review Daily Profits',
                    },
                    {
                        isChecked: false,
                        content: 'Review Orders by Category',
                    },
                    {
                        isChecked: false,
                        content: 'Review Orders by Product',
                    },
                    {
                        isChecked: false,
                        content: 'Authorize Weekly, Monthly, and Yearly Audit',
                    },
                ],
            },
            {
                route: 'contacts',
                powers: [
                    {
                        isChecked: false,
                        content: 'Review All Contacts',
                    },
                    {
                        isChecked: false,
                        content: 'Review Patients',
                    },
                    {
                        isChecked: false,
                        content: 'Review Vendors',
                    },
                    {
                        isChecked: false,
                        content: 'Review Employees',
                    },
                    {
                        isChecked: false,
                        content: 'Create All Contacts',
                    },
                    {
                        isChecked: false,
                        content: 'Create Patients',
                    },
                    {
                        isChecked: false,
                        content: 'Create Vendors',
                    },
                    {
                        isChecked: true,
                        content: 'Create Employees',
                    },
                    {
                        isChecked: true,
                        content: 'Edit All Contacts',
                    },
                    {
                        isChecked: false,
                        content: 'Edit Patients',
                    },
                    {
                        isChecked: false,
                        content: 'Edit Vendors',
                    },
                    {
                        isChecked: false,
                        content: 'Edit Employees',
                    },
                    {
                        isChecked: false,
                        content: 'Delete All Contacts',
                    },
                    {
                        isChecked: false,
                        content: 'Delete Patients',
                    },
                    {
                        isChecked: false,
                        content: 'Delete Vendors',
                    },
                    {
                        isChecked: false,
                        content: 'Delete Employees',
                    },
                ],
            },
        ],
    },
    roles: [
        {
            _id: 'awou5ajdlhng',
            value: 'Developer',
            disabled: true,
        },
        {
            _id: 'ou35ayhajkdng',
            value: 'admin',
        },
        {
            _id: 'alksjhlatuhjh',
            value: 'cashier',
        },
    ],
};

const PageTitle = () => (
    <React.Fragment>
        <Row>
            <Col lg={12}>
                <h5>Roles</h5>
            </Col>
        </Row>
        <Row>
            <Col lg={12}>
                <p className="mb-2">Add, edit, and manage top-level roles for your application</p>
            </Col>
        </Row>
    </React.Fragment>
);

const Roles = () => {
    const { loadedRoutesPowers, routesPowers, loadedRoles, roles, activeRole } = useSelector(
        (state) => state.App.Settings.Roles
    );
    const dispatch = useDispatch();

    // const loadPowers = () => {
    //     if (loadedRoutesPowers[activeRole]) {
    //         logger.debug(`loadPowers() [routesPowers]`, loadedRoutesPowers[activeRole]);
    //         dispatch(setRoutesPowers(loadedRoutesPowers[activeRole]));
    //         return;
    //     }
    //     logger.debug(`fetchPowers()`);
    //     logger.time('fetchPowers()');
    //     setTimeout(() => {
    //         dispatch(setRoutesPowers(data.powers?.[activeRole]));
    //         dispatch(setLoadedRoutesPowers(activeRole, data.powers?.[activeRole]));
    //         logger.timeEnd('fetchPowers()');
    //     }, 1500);
    // };

    const loadRoles = () => {
        if (roles && Boolean(loadedRoutesPowers[activeRole]) === false) {
            logger.debug('removeAllRoutePowers()');
            dispatch(removeAllRoutePowers());
        }

        logger.debug('fetchRoles()');
        logger.time('fetchRoles()');
        setTimeout(() => {
            dispatch(setRoles(data.roles));
            logger.timeEnd('fetchRoles()');
        }, 1750);
    };

    const fetchActiveRole = () => {
        logger.debug('Fetching activeRole');
        logger.time('Fetched activeRole');
        dispatch(setActiveRole('admin'));
        logger.timeEnd('Fetched activeRole');
    };

    const fetchPowers = () => {
        logger.debug('removeAllRoutePowers()');
        dispatch(removeAllRoutePowers());
        logger.debug(`fetchPowers()`);
        logger.time('fetchPowers()');
        setTimeout(() => {
            dispatch(setRoutesPowers(data.powers?.[activeRole]));
            dispatch(setLoadedRoutesPowers(activeRole, data.powers?.[activeRole]));
            logger.timeEnd('fetchPowers()');
        }, 1500);
    };

    const loadPowers = () => {
        logger.debug(`loadPowers() [routesPowers]`, loadedRoutesPowers[activeRole]);
        dispatch(setRoutesPowers(loadedRoutesPowers[activeRole]));
    };

    const updatePowers = () => {
        if (loadedRoutesPowers[activeRole]) loadPowers();
        else fetchPowers();
    };

    const updateRoles = () => {
        if (roles.length < 1) void loadRoles();
    };

    useEffect(() => void fetchActiveRole(), []);

    useEffect(() => {
        if (activeRole) {
            void updatePowers();
            void updateRoles();
        }
    }, [activeRole]);

    return (
        <React.Fragment>
            <PageTitle />
            <Row>
                <SideBar roles={roles} />
                <RoutesPowers routesPowers={routesPowers} />
            </Row>
        </React.Fragment>
    );
};

export default Roles;
