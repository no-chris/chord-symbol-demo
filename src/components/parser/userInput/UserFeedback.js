import React from 'react';

const UserFeedback = ({ parsingError, userChordSymbol }) => {
	let feedbackMsg;

	if (!parsingError) {
		if (userChordSymbol) {
			feedbackMsg = 'Well done! This looks like a valid chord';
		} else {
			feedbackMsg = "I'm ready, please give me a symbol!";
		}
	} else {
		if (parsingError.type === 'NoSymbolFoundError') {
			feedbackMsg = 'Hmmmm... ' + parsingError.message;
		} else {
			feedbackMsg = 'Ups... ' + parsingError.message;
		}
	}

	return <div className={'ui-UserFeedback_Container'}>{feedbackMsg}</div>;
};

export default UserFeedback;
