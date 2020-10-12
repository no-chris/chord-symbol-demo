import React, { useState } from 'react';

import SymbolInput from './components/SymbolInput';
import SymbolRendered from './components/SymbolRendered';

export default function Home() {
	const [userChordSymbol, setUserChordSymbol] = useState('');

	return (
		<div>
			<SymbolInput setUserChordSymbol={setUserChordSymbol} />
			<SymbolRendered userChordSymbol={userChordSymbol} />
		</div>
	);
}
