import React, { useState, useEffect } from 'react';
import { Col, Card, CardBody, Button } from 'reactstrap';
import Logger from '../../helpers/Logger';

const logger = Logger.get('Contacts/SideBar');

const data = {
    contactsTypes: ['patients', 'vendors', 'employees'],
};

const SideBar = () => {
    const [currentContactType, setCurrentContactType] = useState('patients');
    const switchContact = (contact) => setCurrentContactType(contact.toLowerCase());
    useEffect(() => logger.debug(`switchContact() [currentContactType:${currentContactType}]`), [currentContactType]);
    return (
        <Col xl={3} lg={4} className="h-100">
            <Card>
                <CardBody className="p-4">
                    <h5 className="mb-4">Choose Category</h5>
                    {data.contactsTypes.map((contact, index) => {
                        const color = contact === currentContactType ? 'primary' : 'secondary';
                        return (
                            <Button
                                key={`${contact}-${index}`}
                                onClick={() => switchContact(contact)}
                                color={color}
                                className="mb-2 w-100 text-capitalize">
                                {contact}
                            </Button>
                        );
                    })}
                </CardBody>
            </Card>
        </Col>
    );
};

export default SideBar;
