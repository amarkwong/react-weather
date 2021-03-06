import React, {Component} from 'react';
import axios from 'axios';

import CityCondition from './CityCondition';
import Forecaster    from './Forecaster';

import {fetchConditionData,fetchForecastData} from './api/weather.js'

export default class WeatherChannel extends Component {
    constructor(props) {
        super(props);
        // use static data to fill initial state first
        this.state = {
            curCity:'Brisbane',
            condition: {
                city:  'Brisbane, Au',
                temp: '13c',
                weather: 'Clear',
            },
            days:  [
                {weekday: 'Wed', high:23, low:18, icon:'http://icons.wxug.com/i/c/k/clear.gif'},
                {weekday: 'Thu', high:29, low:18, icon:'http://icons.wxug.com/i/c/k/chancerain.gif'},
                {weekday: 'Fri', high:20, low:10, icon:'http://icons.wxug.com/i/c/k/chancerain.gif'}
            ]
        }
    }

    handleCityChange(event){
        const value=event.target.value;
        this.setState({curCity: value});
    }
    onConditionLoad(data){
        const condition={
            //console.log(data.display_location)
            city:data.display_location.full,
            //temp: {C:data.temp_c,F:data.temp_f},
            temp:data.temp_c,
            weather: data.weather,
        }
        console.log(data.display_location);
        this.setState({condition:condition});
    }
    onForecastLoad(data){
//        const forecast={data.map()}
        let foredays=data.simpleforecast.forecastday.map(day=>({
            weekday:day.date.weekday.slice(0,3),
            high:day.high.celsius,
            low:day.low.celsius,
            icon:day.icon_url
        }));
        /*jjjj
        const forecast=data.map(imy=>({weekday:imy.simpleforecast.forecastday.date.weekday,
                high:imy.simpleforecast.forecastday.high.celsius,
                low:imy.simpleforecast.forecastday.low.celsius,
                icon:imy.simpleforecast.forecastday.icon_url}))
                */
        this.setState({days:foredays});
    }
    handleSearch(event){
        /*
       const city= this.state.curCity;
        fetchConditionData(city,this.onConditionLoad.bind(this));
        */
       const city= this.state.curCity;
        fetchConditionData(city).then(data=>{
            this.onConditionLoad(data);
        });
        fetchForecastData(city).then(data=>{
            this.onForecastLoad(data);
        })
    }



    render() {
        return (
            <React.Fragment>
            <nav>
            <div style={{flex:1}}>
                <input className="search-input" value={this.state.curCity} onChange={this.handleCityChange.bind(this)}/>
                <button className="search-btn" onClick={this.handleSearch.bind(this)}><i className="fa fa-search" /></button>
            </div>
            </nav>
            <main>
                <section className='weather-condition'>
                    <CityCondition data={this.state.condition} />
                </section>
                <section className='weather-forecast'>
                    <Forecaster days={this.state.days} />
                </section>
            </main>
            </React.Fragment>
        )
    }
}