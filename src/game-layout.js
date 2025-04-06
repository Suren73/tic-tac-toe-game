import PropTypes from 'prop-types';
import React from 'react';
import { Field, Information } from './components';
import styles from './game.module.css';

export const GameLayout = ({
	field,
	isDraw,
	isGameEnded,
	currentPlayer,
	handleCell,
	handleRestart,
}) => (
	<div className={styles.game}>
		<Information
			isDraw={isDraw}
			isGameEnded={isGameEnded}
			currentPlayer={currentPlayer}
		/>
		<Field field={field} handleCell={handleCell} />
		<button className={styles.restartButton} onClick={handleRestart}>
			Начать заново
		</button>
	</div>
);

GameLayout.propTypes = {
	field: PropTypes.array,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
	handleCell: PropTypes.func,
	handleRestart: PropTypes.func,
};
