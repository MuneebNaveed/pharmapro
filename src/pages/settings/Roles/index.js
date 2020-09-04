import React from 'react';
import { Row, Col } from 'reactstrap';

import Logger from '../../../helpers/Logger';
import SideBar from './SideBar';
import RoutesPowers from './RoutesPowers';

const data = {
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
    return (
        <React.Fragment>
            <PageTitle />
            <Row>
                <SideBar />
                <RoutesPowers />
            </Row>
        </React.Fragment>
    );
};

export default Roles;
