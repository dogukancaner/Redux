import { SET_KEYWORD } from "../constants/product";

const initState = {
  keyword: "",
};

const Product = (state = initState, action) => {
  switch (action.type) {
    case SET_KEYWORD:
      return {
        ...state,
        keyword: action.keyword,
      };
    default:
      return state;
  }
};

export default Product;
