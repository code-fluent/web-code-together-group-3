import React, { Component } from "react";
import TimezoneClock from "./TimezoneClock";

const TIMEZONES_BY_CITY = {
  "New York": "America/New_York",
  London: "Europe/London",
  Amsterdam: "Europe/Amsterdam",
  Paris: "Europe/Paris",
  Cluj: "Europe/Bucharest",
};

class TimezoneManager extends Component {
  constructor(props) {
    super(props);
    this.state = { city: "", timezones: [] };
  }

  onCitySelected = (event) => {
    this.setState({ city: event.target.value });
  };

  addTimezone = () => {
    const city = this.state.city;
    const timezone = TIMEZONES_BY_CITY[city];

    this.setState({
      timezones: this.state.timezones.concat([{ city, timezone }]),
    });
  };

  render() {
    return (
      <div>
        <select value={this.state.city} onChange={this.onCitySelected}>
          <option value="">Choose city..</option>
          <option value="New York">New York</option>
          <option value="London">London</option>
          <option value="Amsterdam">Amasterdam</option>
          <option value="Paris">Paris</option>
          <option value="Cluj">Cluj</option>
        </select>

        <button onClick={this.addTimezone}>Add</button>

        <div className="container">
          {this.state.timezones.map((timezone) => {
            return (
              <TimezoneClock
                key={timezone.timezone}
                timezone={timezone.timezone}
                city={timezone.city}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default TimezoneManager;
