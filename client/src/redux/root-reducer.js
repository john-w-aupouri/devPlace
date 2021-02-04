import { combineReducers } from 'redux';
import alertReducer from './reducers/alert';
import authReducer from './reducers/auth';
import profileReducer from './reducers/profile';

export default combineReducers({
  alertReducer,
  authReducer,
  profileReducer,
});
