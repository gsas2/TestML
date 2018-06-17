import axios from 'axios';

/**
 * @description Get Items that match the search param
 * @param {string} query
 */
export const GetItems = (search) =>
  axios.get(`/api/items?q=${search}`);

/**
 * @description Get Item by ID
 * @param {string} id
 */
export const GetItemDetails = (id) =>
  axios.get(`/api/items/${id}`);
