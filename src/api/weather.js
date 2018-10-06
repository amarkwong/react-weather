/*
import axios from 'axios';
const CONDITION_BASE_URL=
'http://api.wunderground.com/api/f029e46fd0232d12/geolookup/conditions/q/Australia/'
const FORECAST_BASE_URL=
'http://api.wunderground.com/api/f029e46fd0232d12/geolookup/forecast10day/q/Australia/'

const conditionXHR=new XMLHttpRequest();
const forecastXHR=new XMLHttpRequest();
export function fetchConditionData(city,onLoad){
    conditionXHR.open('GET',`${CONDITION_BASE_URL}${city}.json`);
    conditionXHR.send();
    conditionXHR.onload=()=>{
        if (conditionXHR.status===200){
            const dataObj=JSON.parse(conditionXHR.responseText);
            onLoad(dataObj.current_observation);
        }
    }
}
export function fetchForecastData(city,onLoad){
    forecastXHR.open('GET',`${FORECAST_BASE_URL}${city}.json`);
    forecastXHR.send();
    forecastXHR.onload=()=>{
        if (forecastXHR.status===200){
            const dataObj=JSON.parse(forecastXHR.responseText);
            onLoad(dataObj.current_observation);
        }
    }
}
*/
import axios from 'axios';
const CONDITION_BASE_URL=
'http://api.wunderground.com/api/f029e46fd0232d12/geolookup/conditions/q/Australia/';
const FORECAST_BASE_URL=
'http://api.wunderground.com/api/f029e46fd0232d12/geolookup/forecast10day/q/Australia/';

export function fetchConditionData(city) {
    const url=`${CONDITION_BASE_URL}${city}.json`;
    return axios.get(url).then(res=>res.data.current_observation);
}
export function fetchForecastData(city){
    const url=`${FORECAST_BASE_URL}${city}.json`;
    return axios.get(url).then(res=> res.data.forecast);
}