import React from 'react';
import './UserOutput.css'

const useroutput = (props) => {
    return (
        <div className='Box'>
            <p>This is the username: {props.username}</p>
            <p>And this is a paragraph!</p>
        </div>
    )
};

export default useroutput;