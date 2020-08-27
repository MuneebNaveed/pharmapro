import React from 'react';
import { XCircle, CheckCircle } from 'react-feather';

const Power = (props) => (
    <p style={{ lineHeight: '0.5rem', display: 'flex', alignItems: 'center' }}>
        {props.isChecked ? (
            <XCircle className="mr-2 cursor-pointer" color={props?.isChecked ? '#ff5c75' : ''} size={18} />
        ) : (
            <CheckCircle className="mr-2 cursor-pointer" color={props?.isChecked ? '' : '#43d39e'} size={18} />
        )}{' '}
        {props.children}
    </p>
);

export default Power;
