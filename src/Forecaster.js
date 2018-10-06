import React,{Component}  from 'react';

//export default class Forecaster extends Component{
//export default function Forecaster(props) {
 //   const days=props.days;
    /*
    return (
        <div>{rows}</div>
    );
    */
   /*
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
    })
    rows = days.map(day => {
    return <Row key={`${day.weekday}_${index}`} day={day}/>>};
*/
    /*
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
    */
   /*
}
function DailyItem(props) {
    const day=props.day;
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
}
*/
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

function Row (props){
  const newDay = props.day;
  
  return (
    <div className="weather-forecast__row">
    <span className="weather-forecast__day">{newDay.weekday}</span>
    <span className="weather-forecast__icon">
      <img src={newDay.icon} />
    </span>
    <span className="weather-forecast__high">{newDay.high}</span>
    <span className="weather-forecast__low">{newDay.low}</span>
  </div>
  )
  
         
}
/*
export default function Forecaster(props) {
    const days=props.days;
    return(
        <div>
            <div className="forecast__switch">
          <button className='forecast__switch_0 switch-active'>
            5 days
          </button>
          <button className='forecast__switch_1'>
            10 days
          </button>
        </div>    

        {days.map((day1,index) => {return <Row key={`${day1.weekday}_${index}`} day={day1} />})}
        </div>
    );
      
}
*/
export default class Forecaster extends Component {
    constructor(props) {
        super(props);
        // use static data to fill initial state first
        this.state ={
            numOfDays:5
        };
    }
    render() {
        const { days, unit } = this.props;
        const { numOfDays } = this.state;
        return (
            <div>
            <div className="forecast__switch">
                <button className='btnClass0' onClick={e => this.setState({ numOfDays: 5 })}>
                5 days
                </button>
                <button className='btnClass1' onClick={e => this.setState({ numOfDays: 10 })}>
                10 days
                </button>
            </div>
            {days.slice(0, numOfDays).map((day, i) => (
                <Row key={day.key} day={day} unit={unit} />
            ))}
            </div>
        );
    }
}