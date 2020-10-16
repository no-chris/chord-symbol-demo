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
	parsedChord,
	renderedChordTxt,
}) => {
	return (
		<div>
			<h3>Parser</h3>
			<div className={'Parser_Container'}>
				<UserInput
					parsedChord={parsedChord}
					userChordSymbol={userChordSymbol}
					setUserChordSymbol={setUserChordSymbol}
				/>
				<ParserConfig
					parsedChord={parsedChord}
					altIntervals={altIntervals}
					setAltIntervals={setAltIntervals}
				/>
				<Parsed
					parsedChord={parsedChord}
					renderedChordTxt={renderedChordTxt}
				/>
			</div>
		</div>
	);
};

export default Parser;
