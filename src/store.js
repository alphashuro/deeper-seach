import { createStore, applyMiddleware, compose } from "redux";
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";

import reducer from "./reducer";
import thunk from "redux-thunk";

export const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  connectRouter(history)(reducer),
  composeEnhancers(applyMiddleware(routerMiddleware(history), thunk))
);

export default store;
