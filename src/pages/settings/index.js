import React from 'react';
import { Row, Col } from 'reactstrap';
import PageTitle from '../../components/PageTitle';
import Roles from './Roles';

const Settings = () => {
    return (
        <React.Fragment>
            <Row className="page-title" style={{ padding: '20px 0 10px 0' }}>
                <Col className="col-12">
                    <PageTitle
                        breadCrumbItems={[{ label: 'Settings', path: '/settings', active: true }]}
                        title={'Settings'}
                    />
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <p className="mb-5">
                        Easily review and edit app-level configurations and preferences under one hood
                    </p>
                </Col>
            </Row>

            <Roles />
        </React.Fragment>
    );
};

export default Settings;
