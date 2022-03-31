import { createStore } from "redux";
import reducers from "../reducers";

function configureStore(preloadedState) {
  const store = createStore(reducers, preloadedState);

  if (module.hot) {
    module.hot.accept("../reducers/index", () => {
      const nextRootReducer = require("../reducers/index");
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

const store = configureStore();

export { store };
