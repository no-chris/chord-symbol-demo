import React from 'react';

const UserFeedback = ({ parsingError }) => {
	let feedbackMsg;

	if (!parsingError) {
		feedbackMsg = 'Well done! This looks like a valid chord';
	} else {
		switch (parsingError.type) {
			case 'InvalidInput':
				feedbackMsg = "I'm ready, please give me a symbol!";
				break;
			case 'NoSymbolFound':
				feedbackMsg = 'Hmmmm... ' + parsingError.message;
				break;
			default:
				feedbackMsg = 'Ups... ' + parsingError.message;
		}
	}

	return <div className={'ui-UserFeedback_Container'}>{feedbackMsg}</div>;
};

export default UserFeedback;
