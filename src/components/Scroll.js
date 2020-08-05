import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '15px solid bkack', height: '800px'}}>
            {props.children}
        </div>
    )
};

export default Scroll;