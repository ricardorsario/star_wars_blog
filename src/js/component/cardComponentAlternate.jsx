import React from "react";
import PropTypes from "prop-types";

import "../../styles/cardComponentAlternate.scss";
import ButtonComponent from "./buttonComponent.jsx";

const CardComponentAlternate = props => {
	console.log(props);
	return (
		//<div className="cardComponentAlternate container">
		<div className="cardComponentAlternate row">
			<div className="col">
				<img src={props.image} className="cardComponentAlternate__image" />
			</div>
			<div className="col cardComponentAlternate__body">
				<div className="cardComponent__body__text">
					<span className="cardComponentAlternate__body__text--title">{props.title}</span>
					<span className="cardComponentAlternate__body__text--description">{props.description}</span>
				</div>
				<ButtonComponent textButton={<i className="fas fa-plus" />} className="buttonColorRed" />
			</div>
		</div>
		//</div>
	);
};

CardComponentAlternate.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string
};

export default CardComponentAlternate;
