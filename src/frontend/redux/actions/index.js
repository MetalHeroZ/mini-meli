import { SET_PRODUCT_DETAILS, SET_PRODUCTS_LIST } from './actions-type';

export const setProductsList = payload => ({
  type: SET_PRODUCT_DETAILS,
  payload,
});

export const setProductDetails = payload => ({
  type: SET_PRODUCTS_LIST,
  payload,
});
