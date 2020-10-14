import './Parser.scss';

import React from 'react';

import UserInput from './userInput/UserInput';
import ParserConfig from './parserConfig/ParserConfig';
import Parsed from './parsed/Parsed';

const Parser = ({
	altIntervals,
	setAltIntervals,
	setUserChordSymbol,
	userChordSymbol,
}) => {
	return (
		<div>
			<h3>Parser</h3>
			<div className={'Parser_Container'}>
				<UserInput
					altIntervals={altIntervals}
					userChordSymbol={userChordSymbol}
					setUserChordSymbol={setUserChordSymbol}
				/>
				<ParserConfig
					altIntervals={altIntervals}
					userChordSymbol={userChordSymbol}
					setAltIntervals={setAltIntervals}
				/>
				<Parsed
					userChordSymbol={userChordSymbol}
					altIntervals={altIntervals}
				/>
			</div>
		</div>
	);
};

export default Parser;
