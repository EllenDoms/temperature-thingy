import axios from 'axios';

const APIKey = 'a8dd38f80691de124d2bf6c37b89e342';
const rootUrl = `http://api.openweathermap.org/data/2.5/forecast?appid=${APIKey}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(location) {
  const url = `${rootUrl}&q=${location}`;
  console.log(url);
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };

}
