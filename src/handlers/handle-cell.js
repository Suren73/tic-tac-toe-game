import { checkEmptyCell, checkWin } from '../utils';

export const handleCell = (
	{
		isDraw,
		isGameEnded,
		field,
		currentPlayer,
		setField,
		setIsDraw,
		setIsGameEnded,
		setCurrentPlayer,
	},
	cellIndex,
) => {
	if (isDraw || isGameEnded || field[cellIndex] !== '') return;

	const newField = [...field];
	newField[cellIndex] = currentPlayer;
	setField(newField);

	if (checkWin(newField, currentPlayer)) {
		setIsDraw(false);
		setIsGameEnded(true);
		return;
	} else if (checkEmptyCell(newField)) {
		setCurrentPlayer(currentPlayer === '✕' ? '◯' : '✕');
	} else {
		setIsDraw(true);
	}
};
