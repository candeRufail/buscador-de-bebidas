import React from 'react';

const Error = ({mensaje}) => {
    return ( 
        <p className="btn btn-block mt-3 text-center alert alert-primary">{mensaje}</p>
    );
}

// 
export default Error;