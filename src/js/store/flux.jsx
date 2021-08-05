const BASE_URL = "https://www.swapi.tech/api/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			starships: [],
			nextPlanets: ""
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
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
