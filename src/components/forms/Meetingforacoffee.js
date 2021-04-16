import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Meetingforacoffee extends Component {
  render() {
    return (
      <div>
        <h1>Meeting for a coffee</h1>

        <div className="mt50">
          <Link className="button" to="/success" type="button">
            Submit
          </Link>
        </div>
      </div>
    );
  }
}

export default Meetingforacoffee;
