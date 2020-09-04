import React, { useEffect } from 'react';
import { Col, Card, CardBody } from 'reactstrap';
import RoutePowers from './RoutePowers';
import Loader from '../../../../helpers/loader';
import { useSelector, useDispatch } from 'react-redux';
import Logger from '../../../../helpers/Logger';
import * as actions from '../../../../redux/actions';

const logger = Logger.get('RoutesPowers');

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
};

const RoutesPowers = () => {
    const { loadedRoutesPowers, routesPowers, activeRole } = useSelector((state) => state.app.settings.roles);
    const dispatch = useDispatch();
    const cardStyles = routesPowers.length ? { height: 'auto' } : { height: '320px' };

    const fetchActiveRole = () => {
        logger.debug('Fetching activeRole');
        logger.time('Fetched activeRole');
        dispatch(actions.setActiveRole('admin'));
        logger.timeEnd('Fetched activeRole');
    };

    const fetchPowers = () => {
        logger.debug('removeAllRoutePowers()');
        dispatch(actions.removeAllRoutePowers());
        logger.debug(`fetchPowers()`);
        logger.time('fetchPowers()');
        setTimeout(() => {
            dispatch(actions.setRoutesPowers(data.powers?.[activeRole]));
            dispatch(actions.setLoadedRoutesPowers(activeRole, data.powers?.[activeRole]));
            logger.timeEnd('fetchPowers()');
        }, 1500);
    };

    const loadPowers = () => {
        logger.debug(`loadPowers() [routesPowers]`, loadedRoutesPowers[activeRole]);
        dispatch(actions.setRoutesPowers(loadedRoutesPowers[activeRole]));
    };

    const updatePowers = () => {
        if (loadedRoutesPowers[activeRole]) loadPowers();
        else fetchPowers();
    };

    useEffect(() => void fetchActiveRole(), []);

    useEffect(() => {
        if (activeRole) void updatePowers();
    }, [activeRole]);

    return (
        <Col xl={8} lg={6}>
            <Card style={cardStyles}>
                <CardBody>
                    <Loader loading={!Boolean(routesPowers.length)} />
                    {routesPowers.map((route, index) => (
                        <RoutePowers
                            initial={index === 0}
                            key={`Routes-Powers-${index}`}
                            default={Boolean(route?.default)}
                            route={route.route}
                            powers={route.powers}
                        />
                    ))}
                </CardBody>
            </Card>
        </Col>
    );
};

export default RoutesPowers;
