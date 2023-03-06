import { createStore, combineReducers } from 'redux';
import loginReducer from './reducers/loginReducer';
import ordersReducer from './reducers/ordersReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  orders: ordersReducer,
});

const store = createStore(rootReducer);

export default store;
