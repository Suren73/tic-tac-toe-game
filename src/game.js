import { useState } from 'react';
import { GameLayout } from './game-layout';
import { handleCell, handleRestart } from './handlers';
import { createEmptyField } from './utils';

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('✕');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(createEmptyField);

	const state = {
		isDraw,
		isGameEnded,
		field,
		currentPlayer,
		setField,
		setIsDraw,
		setIsGameEnded,
		setCurrentPlayer,
	};

	return (
		<GameLayout
			field={field}
			isDraw={isDraw}
			isGameEnded={isGameEnded}
			currentPlayer={currentPlayer}
			handleCell={(cellIndex) => handleCell(state, cellIndex)}
			handleRestart={() => handleRestart(state)}
		/>
	);
};
