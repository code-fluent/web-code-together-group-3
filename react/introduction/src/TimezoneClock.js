import React, { Component } from "react";
import moment from "moment-timezone";

class TimezoneClock extends Component {
  constructor(props) {
    super(props);
    this.state = { time: moment() };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: moment() });
    }, 1000);
  }

  render() {
    const timezone = this.props.timezone;
    const city = this.props.city;

    return (
      <div className="clock">
        <span className="city">{city}</span>
        <span className="time">
          {this.state.time.tz(timezone).format("HH:mm:ss")}
        </span>
      </div>
    );
  }
}

export default TimezoneClock;
