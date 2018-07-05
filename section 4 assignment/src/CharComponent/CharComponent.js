import React from 'react';
import './CharComponent.css'

let charcomponent = (props) => {
	return (
		<div className='box' onClick={props.click}>
			{props.char}
		</div>);
}

export default charcomponent;