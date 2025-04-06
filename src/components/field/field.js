import PropTypes from 'prop-types';
import React from 'react';
import { FieldLayout } from './field-layout';

export const Field = ({ field, handleCell }) => {
	return <FieldLayout field={field} handleCell={handleCell} />;
};

Field.propTypes = {
	field: PropTypes.array,
	handleCell: PropTypes.func,
};
