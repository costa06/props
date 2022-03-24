import React from 'react';

const Avatar = props => {
    return (
        <>
            <img src={`/${props.children}`} alt=""/>
        </>
    );
}

export default Avatar;
