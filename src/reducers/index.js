import { combineReducers } from 'redux';
import weatherReducer from './reducerWeather';

const rootReducer = combineReducers({
  weather: weatherReducer
});

export default rootReducer;
