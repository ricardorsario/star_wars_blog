import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext.jsx";
import "../../styles/home.scss";
import CardComponent from "../component/cardComponent.jsx";
import CardComponentAlternate from "../component/cardComponentAlternate.jsx";
import CardSectionTitle from "../component/cardSectionTitle.jsx";
import Featured from "../component/featured.jsx";
import Slides from "../component/slides.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [onePeopleCard, setOnePeopleCard] = useState([]);
	const [onePlanetCard, setOnePlanetCard] = useState([]);

	useEffect(
		() => {
			if (store.planets.length) {
				setOnePeopleCard(
					store.planets.map(planetParameter => {
						return (
							<CardComponent
								title={planetParameter.name}
								key={planetParameter.uid}
								description="
								A scaly pelt and wide, curious eyes make Ruby a perfect pet. After she was smuggled to Ord Mantell by Clone Force 99, the mysterious and hungry lizard-like."
								image="https://lumiere-a.akamaihd.net/v1/images/cg-67-main_c6fbf68a.jpeg?region=576%2C0%2C542%2C542"
							/>
						);
					})
				);
			}
		},
		[store.planets]
	);

	useEffect(
		() => {
			if (store.planets.length) {
				setOnePlanetCard(
					store.planets.map(planetParameter => {
						return (
							<CardComponentAlternate
								title={planetParameter.name}
								key={planetParameter.uid}
								description="
								A scaly pelt and wide, curious eyes make Ruby a perfect pet. After she was smuggled to Ord Mantell by Clone Force 99, the mysterious and hungry lizard-like."
								image="https://starwarsblog.starwars.com/wp-content/uploads/2018/10/mustafar-tall.jpg"
							/>
						);
					})
				);
			}
		},
		[store.planets]
	);

	return (
		<div className="home">
			<Slides />
			<CardSectionTitle title="People" />
			<div className="container">
				<div className="row">
					<div className="col">{onePeopleCard[0]}</div>
					<div className="col">{onePeopleCard[1]}</div>
					<div className="col">{onePeopleCard[2]}</div>
					<div className="col">{onePeopleCard[3]}</div>
				</div>
			</div>
			<CardSectionTitle title="Planets" />
			<div className="container">
				<div className="row">
					<div className="col-5">
						<Featured
							title="Featured: Coruscant"
							description="A city-covered planet, Coruscant is the vibrant heart and capital of the galaxy, featuring a diverse mix of citizens and culture."
							image="https://cdnb.artstation.com/p/assets/images/images/030/865/397/original/shiny-man-coruscant-orbit-black.gif?1601907685"
						/>
					</div>
					<div className="col">{onePlanetCard[0]}</div>
				</div>
			</div>
			<CardSectionTitle title="Starships" />
			<div className="container">
				<div className="row">
					<div className="col">{onePeopleCard[0]}</div>
					<div className="col">{onePeopleCard[1]}</div>
					<div className="col">{onePeopleCard[2]}</div>
					<div className="col">{onePeopleCard[3]}</div>
				</div>
			</div>
		</div>
	);
};
