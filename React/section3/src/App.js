import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import Headers from './Headers';
import Modal from './Modal';

class App extends Component {
  constructor(){
    super();
    this.state = {
      temp: '',
      cityName: '',
      weather: '',
      high: '',
      low: '',
      icon: '',
      isRaining: '',
    }

  }

  componentDidMount(){
    this.getCityWeather('London')
    var elems = document.querySelectorAll('.modal');
    var instances = window.M.Modal.init(elems);

  }


  componentDidUpdate(prevProps, prevState){
    const isRaining = this.state.weather.includes('rain');
    if(this.state.weather !== prevState.weather){
      if (isRaining) {
        this.setState({
          isRaining: 'Rain rain go away!'
        })
      }
    }
  }

  searchCity = (e)=>{
    e.preventDefault();
    const city = document.getElementById('city').value;
    this.getCityWeather(city);
    
  }

  getCityWeather =(city)=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=199135d0df87cd3384e4f960b495c285`
    axios.get(url).then((resp) => {
      this.setState({
        temp: resp.data.main.temp,
        high: resp.data.main.temp_max,
        low: resp.data.main.temp_min,
        weather: resp.data.weather[0].description,
        icon: resp.data.weather[0].icon,
        cityName: resp.data.name
      })
    })
  }


  render(){
    
    const iconUrl = `http://openweathermap.org/img/wn/${this.state.icon}.png`

    return (
      <div className="App">
        <div className="row">
          <div className='col s6 offset-s3'>
            <Headers temp={this.state.temp} isRaining={this.state.isRaining}/>
            <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Details</a>
            <form onSubmit={this.searchCity}>
              <input type="text" id="city" placeholder="Enter a city name"/>
            </form>
          </div>
      </div>
      <Modal iconUrl={iconUrl} weather={this.state.weather} cityName={this.state.cityName} low={this.state.low} high={this.state.high}/>
          
      </div>
    );
  }
  }

export default App;
