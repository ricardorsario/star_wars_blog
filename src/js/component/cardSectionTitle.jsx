import React from "react";
import PropTypes from "prop-types";

import "../../styles/cardSectionTitle.scss";

const CardSectionTitle = props => {
	console.log(props);
	return <div>{props.title}</div>;
};

CardSectionTitle.propTypes = {
	title: PropTypes.string
};

export default CardSectionTitle;
