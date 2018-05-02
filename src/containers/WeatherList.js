import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
import Chart from '../components/chart';
import GoogleMap from '../components/googleMap';

class WeatherList extends Component {
  renderWeather(cityData) {
    console.log('Citydata: ', cityData)
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp - 273,15);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humid = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color='orange' units='°C' /></td>
        <td><Chart data={pressures} color='green' units='hPa' /></td>
        <td><Chart data={humid} color='blue' units='%' /></td>
      </tr>
    )
  }
  render() {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }) { // identical to const weather = state.weather
  return { weather }; // identical to weather: weather
}

export default connect (mapStateToProps)(WeatherList);
