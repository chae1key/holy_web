import bible from "./modules/bible"
import {
  createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger'

// import user from "./modules/user";


const middlewares = [thunk];

const rootReducer = combineReducers({ bible }); //user

const enhancer = applyMiddleware(...middlewares, logger);

const store = createStore(rootReducer, enhancer);

export default store;