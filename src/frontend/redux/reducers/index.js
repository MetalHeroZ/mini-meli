import { SET_PRODUCTS_LIST, SET_PRODUCT_DETAILS } from '../actions/actions-type';

const setProductsList = (state, action) => {
  const { categories = [], items = [], query = '' } = action.payload;
  return {
    ...state,
    productsList: {
      ...state.productsList,
      categories,
      items,
      query,
    },
  };
};

const setDetails = (state, action) => {
  return {
    ...state,
    productDetails: action.payload,
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_PRODUCTS_LIST:
      return setProductsList(state, action);
    case SET_PRODUCT_DETAILS:
      return setDetails(state, action);
    default:
      return state;
  }
};

export default reducer;
