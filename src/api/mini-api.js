import axios from 'axios';

export const getItemInformation = itemId => axios.get(`${process.env.MINI_API}/items/${itemId}`);

export const searchItemsByQuery = query => axios.get(`${process.env.MINI_API}/items?q=${query}`);

