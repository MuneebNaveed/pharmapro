import React, { useState, useEffect } from 'react';
import {
    Row,
    Col,
    Modal,
    ModalBody,
    Input,
    Label,
    Pagination,
    PaginationItem,
    PaginationLink,
    Button,
    Card,
    CardBody,
} from 'reactstrap';
import { If, Then, Else } from 'react-if';
import Loader from '../../../helpers/loader';
import Logger from '../../../helpers/Logger';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveRole } from '../../../redux/app/actions';
import classnames from 'classnames';

const logger = Logger.get('SideBar');

const CreateRoleModal = ({ isOpen, toggle }) => (
    <Modal isOpen={isOpen} toggle={toggle}>
        <ModalBody>
            <h5>Add new Role</h5>
            <Input autoComplete="false" className="mb-3" />
            <div className="float-right">
                <Button color="secondary" onClick={toggle} className="mr-2">
                    Cancel
                </Button>
                <Button color="primary" onClick={toggle}>
                    Add
                </Button>
            </div>
        </ModalBody>
    </Modal>
);

const RemoveRoleModal = ({ isOpen, toggle, hideRoles, resetSelectedRole }) => (
    <Modal isOpen={isOpen} toggle={toggle}>
        <ModalBody>
            <h5>{`Remove Role?`}</h5>
            <p>Are you sure you want to remove the selected role?</p>
            <div className="float-right">
                <Button
                    color="secondary"
                    onClick={() => {
                        resetSelectedRole();
                        toggle();
                    }}
                    className="mr-2">
                    Cancel
                </Button>
                <Button
                    color="danger"
                    onClick={() => {
                        hideRoles();
                        resetSelectedRole();
                        toggle();
                    }}>
                    Remove
                </Button>
            </div>
        </ModalBody>
    </Modal>
);

const FetchedRoles = (props) => {
    const { activeRole } = useSelector((state) => state.App.Settings.Roles);
    const dispatch = useDispatch();
    return props.roles.map((role, index) => (
        <Button
            name={role.value}
            key={`fetched-role-${role.value.toLowerCase()}-${index}`}
            disabled={role.value.toLowerCase() === 'developer'}
            color="secondary"
            className="w-100 mb-2 text-capitalize"
            style={role.value.toLowerCase() === 'developer' ? { cursor: 'not-allowed' } : {}}
            onClick={(event) => {
                const name = event.target.name;
                if (name.toLowerCase() === activeRole) {
                    logger.warn(`ROLE ALREADY ACTIVE, [activeRole:${name.toLowerCase()}]`);
                    return;
                }

                setTimeout(() => {
                    dispatch(setActiveRole(name.toLowerCase()));
                    logger.debug(`setActiveRole() [activeRole:${name.toLowerCase()}]`);
                }, 150);
            }}>
            {role.value}
        </Button>
    ));
};

const RolesPagination = () => (
    <Row>
        <Col xl={12}>
            <Pagination aria-label="Page navigation example">
                <PaginationItem>
                    <PaginationLink first href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">4</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">5</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink next href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink last href="#" />
                </PaginationItem>
            </Pagination>
        </Col>
    </Row>
);

const Search = () => (
    <Row>
        <Col xl={12}>
            <Label className="mb-3">Search Roles</Label>
            <Input className="mb-2" />
        </Col>
    </Row>
);

const RemoveRoles = (props) => {
    const [isDeleteRoleModalOpen, setIsDeleteRoleModalOpen] = useState(false);
    const [showRoles, setShowRoles] = useState(false);
    const [selectedRole, setSelectedRole] = useState(null);
    useEffect(() => logger.debug(`setShowRoles() [showRoles:${showRoles}]`), [showRoles]);
    useEffect(() => {
        logger.debug(`selectRole() [selectedRole:${selectedRole?.toString()}]`);
        if (selectedRole !== null) setIsDeleteRoleModalOpen(true);
    }, [selectedRole]);
    return (
        <React.Fragment>
            <div className={classnames('position-relative', { 'pb-lg-5': showRoles })}>
                <Button color="danger" className="w-100" onClick={() => setShowRoles((prevState) => !prevState)}>
                    Remove Existing Roles
                </Button>
                <If condition={showRoles}>
                    <Card
                        className="position-absolute"
                        style={{
                            left: '50%',
                            width: '105%',
                            margin: '0 auto',
                            zIndex: '20',
                            transform: 'translate(-50%,-5%)',
                        }}>
                        <CardBody className="p-0">
                            <ul id="roles-list">
                                <li id="pagination">...</li>
                                {props.roles.map((role) => {
                                    if (role.value.toLowerCase() === 'developer') return null;
                                    return (
                                        <li
                                            key={`${role.value.toString()}-0`}
                                            _id={role._id}
                                            onClick={(event) => setSelectedRole(event.target.innerText.toLowerCase())}>
                                            {role.value}
                                        </li>
                                    );
                                })}
                                <li id="pagination">...</li>
                            </ul>
                        </CardBody>
                    </Card>
                </If>
            </div>
            <RemoveRoleModal
                isOpen={isDeleteRoleModalOpen}
                toggle={() => setIsDeleteRoleModalOpen((prevState) => !prevState)}
                resetSelectedRole={() => setSelectedRole(null)}
                hideRoles={() => setShowRoles(false)}
            />
        </React.Fragment>
    );
};

const SideBar = (props) => {
    const cardStyles = props.roles.length < 1 ? { height: '160px' } : { height: 'auto' };
    const [isCreateRoleModalOpen, setIsOpen] = useState(false);

    useEffect(() => logger.debug(`toggleModal() [open:${isCreateRoleModalOpen}]`), [isCreateRoleModalOpen]);

    return (
        <Col xl={4} lg={6} md={12}>
            <Card>
                <CardBody style={cardStyles} className="p-4">
                    <If condition={props.roles.length < 1}>
                        <Then>
                            <Loader loading={true} />
                        </Then>
                        <Else>
                            <Button
                                onClick={() => setIsOpen((prevState) => !prevState)}
                                color="primary"
                                className="w-100 mb-2">
                                Create New Role
                            </Button>
                            <FetchedRoles roles={props.roles || []} />
                            <RolesPagination />
                            <Search />
                            <RemoveRoles roles={props.roles || []} />
                            <CreateRoleModal
                                isOpen={isCreateRoleModalOpen}
                                toggle={() => setIsOpen((prevState) => !prevState)}
                            />
                        </Else>
                    </If>
                </CardBody>
            </Card>
        </Col>
    );
};

export default SideBar;
