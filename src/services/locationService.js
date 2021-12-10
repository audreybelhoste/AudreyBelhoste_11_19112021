export const getAllLocations = async () => {
	return fetch(window.location.origin + '/data.json')
	.then(content => content.json())
};

export const getLocationById = async (id) => {
	return getAllLocations()
	.then(data => data.find((elt) => elt.id === id))
};

