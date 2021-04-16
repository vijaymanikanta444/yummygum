import React, { Component } from 'react';
import Contact from './Contact';
import Address from './Address';
import * as AiIcons from 'react-icons/ai';
import { useHistory } from 'react-router-dom';

export class Home extends Component {
  state = {
    slide: false,
    // selected: 'planavideocall',
  };

  next = () => {
    this.setState({ slide: true });
    console.log('slide');
  };

  back = () => {
    this.setState({ slide: false });
    const { history } = this.props;
    history.push('/');
  };

  render() {
    return (
      <div>
        <AiIcons.AiOutlineArrowRight
          className="arrow"
          onClick={this.back}
          style={{
            visibility: this.state.slide == true ? 'visible' : 'hidden',
          }}
        />
        <Address slide={this.state.slide} next={this.next} />
        <Contact slide={this.state.slide} next={this.next} />
      </div>
    );
  }
}

export default Home;
