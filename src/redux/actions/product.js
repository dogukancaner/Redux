import { SET_KEYWORD } from "../constants/product";

export const SetKeyword = (keyword) => {
  return {
    type: SET_KEYWORD,
    keyword,
  };
};
