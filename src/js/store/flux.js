const BASE_URL = "https://www.swapi.tech/api/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: []
		},
		actions: {
			getPeople: () => {
				fetch(BASE_URL.concat("people"))
					.then(response => {
						if (!response.ok) {
							throw new Error("Wraninggg¡¡", response.status);
						}
						return response.json();
					})
					.then(jsonStarPeople => {
						setStore({ people: jsonStarPeople.results });
					})
					.catch(error => {
						console.log(error);
					});
			}
		}
	};
};

export default getState;
