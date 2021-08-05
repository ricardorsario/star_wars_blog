import React from "react";
import PropTypes from "prop-types";

import "../../styles/cardComponent.scss";
import ButtonComponent from "./buttonComponent.jsx";

const CardComponent = props => {
	console.log(props);
	return (
		<div className="cardComponent">
			<img src={props.image} className="cardComponent__image" />
			<div className="cardComponent__body">
				<div className="cardComponent__body__text">
					<span className="cardComponent__body__text--title">{props.title}</span>
					<span className="cardComponent__body__text--description">{props.description}</span>
				</div>
				<ButtonComponent textButton={<i className="fas fa-plus" />} />
			</div>
		</div>
	);
};

CardComponent.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string
};

export default CardComponent;
