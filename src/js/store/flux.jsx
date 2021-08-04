const BASE_URL = "https://www.swapi.tech/api/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			starShips: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			getStarShips: () => {
				fetch(BASE_URL.concat("starships/"))
					.then(response => {
						if (!response.ok) {
							throw new Error("Houston! Houston! We have a problem!!", response.status);
						}
						return response.json();
					})
					.then(jsonStarShips => {
						console.log(jsonStarShips.results);
					})
					.catch(error => {
						console.log(error);
					});

				getStarShips();
			}
		}
	};
};

export default getState;
