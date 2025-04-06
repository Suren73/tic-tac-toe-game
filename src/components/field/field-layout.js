import PropTypes from 'prop-types';
import styles from './field.module.css';

export const FieldLayout = ({ field, handleCell }) => (
	<div className={styles.field}>
		{field.map((cellPlayer, index) => (
			<button key={index} className={styles.cell} onClick={() => handleCell(index)}>
				{cellPlayer}
			</button>
		))}
	</div>
);

FieldLayout.propTypes = {
	field: PropTypes.array,
	handleCell: PropTypes.func,
};
