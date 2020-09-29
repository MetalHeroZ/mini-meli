import { SET_PRODUCTS_LIST, SET_PRODUCT_DETAILS } from '../actions/actions-type';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_PRODUCTS_LIST:
      return {
        ...state,
        productsList: {
          ...state.productsList,
          items: action.payload,
        },
      };
    case SET_PRODUCT_DETAILS:
      return {
        ...state,
        productDetails: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
