import React from 'react';
import { Row, Col } from 'reactstrap';
import PageTitle from '../../components/PageTitle';
import SideBar from './SideBar';
import Content from './Content';

const Contacts = () => {
    return (
        <React.Fragment>
            <Row className="page-title" style={{ padding: '20px 0 10px 0' }}>
                <Col className="col-12">
                    <PageTitle
                        breadCrumbItems={[{ label: 'Contacts', path: '/contacts', active: true }]}
                        title={'Contacts'}
                    />
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <p className="mb-3">Easily review, add, and edit app-level contacts under one hood</p>
                </Col>
            </Row>

            <Row>
                <SideBar />
                <Content />
            </Row>
        </React.Fragment>
    );
};

export default Contacts;
