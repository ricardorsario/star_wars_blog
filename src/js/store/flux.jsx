const BASE_URL = "https://www.swapi.tech/api/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			starShips: [],
			nextPlanets: "",
			nextStarShips: ""
		},
		actions: {
			getPlanets: () => {
				let url = getStore().nextPlanets ? getStore().nextPlanets : BASE_URL.concat("planets");

				fetch(url)
					.then(response => {
						if (!response.ok) {
							throw new Error("This is an intergalactic catastrophe", response.status);
						}
						return response.json();
					})
					.then(jsonPlanets => {
						setStore({ planets: [...getStore().planets, ...jsonPlanets.results].flat() }); //.results para seleccionar solo lo que nos interesa

						if (jsonPlanets.next) {
							setStore({ nextPlanets: jsonPlanets.next });
							getActions().getPlanets();
						}
					})
					.catch(error => {
						console.log(error);
					});
			},

			// PARTE DE VINO
			getStarShips: () => {
				let url = getStore().nextStarShips ? getStore().nextStarShips : BASE_URL.concat("starships");

				fetch(url)
					.then(response => {
						if (!response.ok) {
							throw new Error("This is an intergalactic catastrophe", response.status);
						}
						return response.json();
					})
					.then(jsonStarShips => {
						setStore({ starShips: [...getStore().starShips, ...jsonStarShips.results].flat() }); //.results para seleccionar solo lo que nos interesa

						if (jsonStarShips.next) {
							setStore({ nextPlanets: jsonStarShips.next });
							getActions().getStarShips();
						}
					})
					.catch(error => {
						console.log(error);
					});
			}
		}
	};
};

export default getState;
