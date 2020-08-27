import React, { useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import PageTitle from '../../components/PageTitle';
import SideBar from './SideBar';
import Content from './Content';
import { setContacts } from '../../redux/app/actions';
// import Roles from './Roles';
import { useSelector, useDispatch } from 'react-redux';

const data = {
    contacts: [
        {
            _id: 'ajksllyhtkuay3tl6',
            name: 'Muneeb Naveed',
            email: 'mfkofficial98@gmail.com',
            since: Date('22-08-1993'),
        },
        {
            _id: 'rya8iousljgkg',
            name: 'Hassan Naveed',
            email: 'hassannaveed24@gmail.com',
            since: Date('22-08-1986'),
        },
    ],
};

const Contacts = () => {
    const { contacts } = useSelector((state) => state.App.Contacts);
    const dispatch = useDispatch();
    const fetchContacts = () => setTimeout(() => dispatch(setContacts(data.contacts)), 2150);
    useEffect(() => {
        if (contacts.length < 1) fetchContacts();
    }, []);
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
                <Content contacts={contacts} />
            </Row>
            {/* <Content /> */}

            {/* <ButtonGroup className="mb-3">
                <Button color="secondary" onClick={(event) => switchContact(event.target.textContent)}>
                    Patients
                </Button>
                <Button color="primary" onClick={(event) => switchContact(event.target.textContent)}>
                    Vendors
                </Button>
                <Button color="secondary" onClick={(event) => switchContact(event.target.textContent)}>
                    Employees
                </Button>
            </ButtonGroup> */}

            {/* <If condition={currentContactType === 'patients'}>
                <Patients />
            </If>
            <If condition={currentContactType === 'vendors'}>
                <Vendors />
            </If>
            <If condition={currentContactType === 'employees'}>
                <Employees />
            </If> */}
        </React.Fragment>
    );
};

export default Contacts;
