import { searchItemsByQuery, getItemInformation } from '../../../api/mini-api';
import { SET_PRODUCT_DETAILS, SET_PRODUCTS_LIST } from './actions-type';

export const setItemsList = payload => ({
  type: SET_PRODUCTS_LIST,
  payload,
});
export const setItemDetails = payload => ({
  type: SET_PRODUCT_DETAILS,
  payload,
});

export function searchByQuery(query) {
  return async (dispatch) => {
    try {
      const res = await searchItemsByQuery(query);
      dispatch(setItemsList({
        ...res.data,
        query,
      }));
    } catch (error) {
      console.log(error);
    }
  };
};

export function getDetailsById(id) {
  return async (dispatch) => {
    try {
      const res = await getItemInformation(id);
      dispatch(setItemDetails(res.data));
    } catch (error) {
      console.log(error);
    }
  };
};
