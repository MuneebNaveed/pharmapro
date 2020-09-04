import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'react-feather';
import SmoothCollapse from 'react-smooth-collapse';
import Logger from '../../../../helpers/Logger';
import Power from './Power';
import { Row, Col } from 'reactstrap';
import { useSelector } from 'react-redux';

const logger = Logger.get('RoutePowers');

const RoutePowers = (props) => {
    const { activeRole } = useSelector((state) => state.app.settings.roles);
    const [isExpanded, setIsExpanded] = useState(false);
    const expandOnDefault = () => setIsExpanded(Boolean(props?.default));
    const updateCollapseOnRoleChange = () => {
        if (props?.default === false) setIsExpanded(false);
    };
    useEffect(() => expandOnDefault(), []);
    useEffect(() => logger.info(`toggleCollapse() [route:${props.route},collapsed:${!isExpanded}]`), [isExpanded]);
    useEffect(() => updateCollapseOnRoleChange(), [activeRole]);

    return (
        <React.Fragment>
            <Row>
                <Col>
                    <h5
                        style={{ display: 'inline-block' }}
                        className="mb-3 cursor-pointer text-capitalize user-select-none"
                        onClick={() => setIsExpanded((prevState) => !prevState)}>
                        {props.route} <ChevronDown />
                    </h5>
                    {props?.initial && <h5 className="float-right text-capitalize">{activeRole}</h5>}
                </Col>
            </Row>
            <SmoothCollapse expanded={isExpanded}>
                {props.powers.map((power, index) => (
                    <Power key={`Power-${index}`} route={props.route} isChecked={Boolean(power?.isChecked)}>
                        {power.content}
                    </Power>
                ))}
            </SmoothCollapse>
        </React.Fragment>
    );
};

export default RoutePowers;
