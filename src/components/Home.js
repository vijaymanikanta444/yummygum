import React, { Component } from 'react';
import Contact from './Contact';
import Address from './Address';

export class Home extends Component {
  state = {
    slide: false,
    // selected: 'planavideocall',
  };

  next = () => {
    this.setState({ slide: true });
    console.log('slide');
  };

  render() {
    return (
      <div>
        <Address slide={this.state.slide} next={this.next} />
        <Contact slide={this.state.slide} next={this.next} />
      </div>
    );
  }
}

export default Home;
