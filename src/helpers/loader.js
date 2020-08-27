import React from 'react';
import BounceLoader from 'react-spinners/BounceLoader';

const Loader = (props) => {
    return (
        <div data-component="Loader">
            <BounceLoader size={30} color={'#43d39e'} loading={props.loading} />
        </div>
    );
};

export default Loader;
