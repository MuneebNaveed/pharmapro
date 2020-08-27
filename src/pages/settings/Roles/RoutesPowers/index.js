import React from 'react';
import { Col, Card, CardBody } from 'reactstrap';
import RoutePowers from './RoutePowers';
import Loader from '../../../../helpers/loader';

const RoutesPowers = (props) => {
    const cardStyles = props.routesPowers.length ? { height: 'auto' } : { height: '320px' };

    return (
        <Col xl={8} lg={6}>
            <Card style={cardStyles}>
                <CardBody>
                    <Loader loading={!Boolean(props.routesPowers.length)} />
                    {props.routesPowers.map((route, index) => (
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
