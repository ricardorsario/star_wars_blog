import React from "react";
import PropTypes from "prop-types";

import "../../styles/featured.scss";
import ButtonComponent from "./buttonComponent.jsx";

const Featured = props => {
	console.log(props);
	return (
		<div className="featured">
			<img src={props.image} className="featured__image" />
			<div className="featured__body">
				<div className="featured__body__text">
					<span className="featured__body__text--title">{props.title}</span>
					<span className="featured__body__text--description">{props.description}</span>
				</div>
				<ButtonComponent textButton={<i className="fas fa-plus" />} />
			</div>
		</div>
	);
};

Featured.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string
};

export default Featured;
