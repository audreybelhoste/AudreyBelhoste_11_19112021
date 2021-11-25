import { data } from "../data";

export const getLocationById = (id) => data.find((elt) => elt.id === id);
export const getAllLocations = () => data;