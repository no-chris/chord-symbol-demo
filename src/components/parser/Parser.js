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
	parsingError,
	renderedChordDefault,
}) => {
	return (
		<div>
			<h3>Parser</h3>
			<div className={'Parser_Container'}>
				<UserInput
					userChordSymbol={userChordSymbol}
					setUserChordSymbol={setUserChordSymbol}
					parsingError={parsingError}
				/>
				<ParserConfig
					parsedChord={parsedChord}
					altIntervals={altIntervals}
					setAltIntervals={setAltIntervals}
				/>
				<Parsed
					parsedChord={parsedChord}
					renderedChordTxt={renderedChordDefault}
				/>
			</div>
		</div>
	);
};

export default Parser;
