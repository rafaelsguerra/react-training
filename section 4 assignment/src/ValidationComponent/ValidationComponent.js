import React from 'react'

const validationcomponent = (props) => {
	let result = null;

	if (props.length < 5) {
		result = (
			<p>Text is too short!</p>
		);
	} else {
		result = (
			<p>Text is long enough!</p>
		);
	}

	return (
		<div>
			{result}
		</div>
	);
}

export default validationcomponent;