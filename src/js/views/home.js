import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(
		() => {
			if (store.people.length) {
				console.log(store.people);
			}
		},
		[store.people]
	);
	return (
		<div className="text-center mt-5">
			<h1>People</h1>
		</div>
	);
};
