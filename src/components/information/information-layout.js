import PropTypes from 'prop-types';
import React from 'react';

export const InformationLayout = ({ information, classNames }) => {
	return <div className={classNames}>{information}</div>;
};

InformationLayout.propTypes = {
	information: PropTypes.string,
	classNames: PropTypes.string,
};
