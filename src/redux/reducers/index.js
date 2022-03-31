import { combineReducers } from "redux";
import Product from "./product";

const rootReducer = combineReducers({
  product: Product,
});

export default rootReducer;
