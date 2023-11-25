
import { createStore, combineReducers } from 'redux';
import invoiceReducer from './reducers/invoiceReducer';

const rootReducer = combineReducers({
  invoiceReducer,
});

export const store = createStore(rootReducer);
