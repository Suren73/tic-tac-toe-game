import PropTypes from 'prop-types';
import React from 'react';
import { InformationLayout } from './information-layout';
import styles from './information.module.css';

export const Information = ({ isDraw, isGameEnded, currentPlayer }) => {
	const classNames = [
		styles.information,
		isGameEnded && styles.activeWin,
		isDraw && styles.activeDraw,
	]
		.filter(Boolean)
		.join(' ');

	const information = isDraw
		? 'Ничья'
		: isGameEnded
			? `Победа: ${currentPlayer}`
			: `Ходит ${currentPlayer}`;
	return <InformationLayout information={information} classNames={classNames} />;
};

Information.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
};
