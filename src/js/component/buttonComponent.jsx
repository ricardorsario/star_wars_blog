import React from "react";
import PropTypes from "prop-types";

import "../../styles/buttonComponent.scss";

const ButtonComponent = props => {
	return <button type="button">{props.textButton}</button>;
};

ButtonComponent.propTypes = {
	textButton: PropTypes.string
};

export default ButtonComponent;
