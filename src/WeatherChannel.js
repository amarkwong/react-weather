import React, {Component} from 'react';

import CityCondition from './CityCondition';
import Forecaster    from './Forecaster';

export default class WeatherChannel extends Component {
    constructor(props) {
        super(props);
        // use static data to fill initial state first
        this.state = {
            condition: {
                city:  'Brisbane, Au',
                temp: '12c',
                weather: 'Clear'
            },
            days:  [
                {weekday: 'Wed', high:23, low:18, icon:'http://icons.wxug.com/i/c/k/clear.gif'},
                {weekday: 'Thu', high:29, low:18, icon:'http://icons.wxug.com/i/c/k/chancerain.gif'},
                {weekday: 'Fri', high:20, low:10, icon:'http://icons.wxug.com/i/c/k/chancerain.gif'}
            ]
        }
    }

    render() {
        return (
            <main>
                <section className='weather-condition'>
                    <CityCondition data={this.state.condition} />
                </section>
                <section className='weather-forecast'>
                    <Forecaster days={this.state.days} />
                </section>
            </main>
        )
    }
}