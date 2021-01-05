import { combineReducers } from 'redux';
import alertReducer from './reducers/alert';
import authReducer from './reducers/auth';

export default combineReducers({
  alertReducer,
  authReducer,
});
