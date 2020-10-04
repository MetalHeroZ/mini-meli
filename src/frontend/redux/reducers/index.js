import { SET_PRODUCTS_LIST, SET_PRODUCT_DETAILS } from '../actions/actions-type';

const setSearchResults = (state, action) => {
  const { categories = [], items = [], query = '' } = action.payload;
  return {
    ...state,
    searchResults: {
      ...state.searchResults,
      categories,
      items,
      query,
    },
  };
};

const setItemDetails = (state, action) => {
  return {
    ...state,
    itemDetails: action.payload,
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_PRODUCTS_LIST:
      return setSearchResults(state, action);
    case SET_PRODUCT_DETAILS:
      return setItemDetails(state, action);
    default:
      return state;
  }
};

export default reducer;
