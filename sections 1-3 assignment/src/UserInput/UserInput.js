import React from 'react';

const userinput = (props) => {
    return(
        <div>
            <p>Input some data here:</p>
            <input type="text" onChange={props.changed} value={props.username}/>
        </div>
    );
    
};

export default userinput;