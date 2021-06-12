import React, { Component } from 'react';

class Commingsoon extends Component {
    constructor(props) {
        super(props);
        this.state = { time: {}, seconds: props.time ? props.time : props.time };
        this.timer = 0;
        this.timecount = this.timecount.bind(this);
    }

    TimerClock(secs) {
        let days = Math.floor(secs / (60 * 60 * 24));

        let hours = Math.floor(secs / (60 * 60));

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;

        let seconds = Math.ceil(divisor_for_seconds);

        let obj = {
            d: days,
            h: hours,
            m: minutes,
            s: seconds
        };
        return obj;
    }

    componentDidMount() {
        let timeset = this.TimerClock(this.state.seconds);
        this.setState({ time: timeset });
        this.startTimer();
    }

    startTimer() {
        if (this.timer === 0) {
            this.timer = setInterval(this.timecount, 1000);
        }
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    timecount() {
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.TimerClock(seconds),
            seconds: seconds
        });
        if (seconds === 0) {
            clearInterval(this.timer);
        }
    }
    render() {
        const { d, h, m, s } = this.state.time;
        return (
            <ul className="countdown list-inline d-flex justify-content-between">
                <li>
                    <span className="days">{d}</span>
                    <p className="days_ref">Days</p>
                </li>
                <li>
                    <span className="hours">{h}</span>
                    <p className="hours_ref">Hours</p>
                </li>
                <li>
                    <span className="minutes">{m}</span>
                    <p className="minutes_ref">Minutes</p>
                </li>
                <li>
                    <span className="seconds">{s < 10 ? `0${s}` : s}</span>
                    <p className="seconds_ref">Seconds</p>
                </li>
            </ul>
        );
    }
}

export default Commingsoon;