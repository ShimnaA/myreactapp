import React from 'react';

const charcomponent = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid black'

    };
    return(
        <div style={style}>
            {props.chardata}
        </div>
    );
};
export default charcomponent;
