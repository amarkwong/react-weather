import React,{Component}  from 'react';

//export default class Forecaster extends Component{
export default function Forecaster(props) {
    const days=props.days;
    let rows =[];
    for (let i=0; i<days.length; i++) 
    {
        let row=(
            <div class="weather-forecast__row">
            <span class="weather-forecast__day">{days[i].weekday}</span>
            <span class="weather-forecast__icon">
                <img src={days[i].icon}/>
            </span>
            <span class="weather-forecast__high">{days[i].high}</span>
            <span class="weather-forecast__low">{days[i].low}</span>
            </div>
        )
        rows.push(row);
    }
    return (
        <div>{rows}</div>
    );
}
/*export default function Forecaster(props) {
    days = 
    rows = days.map(day => {
        return (
          <div className="weather-forecast__row">
            <span className="weather-forecast__day">{day.weekday}</span>
            <span class="weather-forecast__icon">
              <img src={day.icon} />
            </span>
            <span class="weather-forecast__high">{day.high}</span>
            <span class="weather-forecast__low">{day.low}</span>
          </div>
        );
    });
}
*/