import React, { useContext, useEffect } from "react";
//import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext.jsx";

const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(
		() => {
			if (store.starShip) {
				console.log(store.starShip);
			}
		},
		[store.starShip]
	);

	return <h1>Hola</h1>;
};

export default Home;
