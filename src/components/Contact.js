import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Demo from './Demo';
import Birdsandbees from './forms/Birdsandbees';
import { Meetingforacoffee } from './forms/Meetingforacoffee';
import Planavideocall from './forms/Planavideocall';
import Yourgreatproject from './forms/Yourgreatproject';

export class Contact extends Component {
  state = {
    selected: 'planavideocall',
  };

  click = (e) => {
    this.setState({ selected: '/' + e.target.value });
  };

  buttonSubmit = () => {
    alert('button is clicked');
  };

  render() {
    return (
      <div
        className="contactBlock"
        style={{
          left: this.props.slide == true ? '25%' : '720px',
          width: this.props.slide == true ? '90%' : '650px',
        }}
      >
        {window.location.pathname == '/' ? (
          <Demo click={this.click} next={this.props.next} state={this.state} />
        ) : window.location.pathname == '/yourgreatproject' ? (
          <Yourgreatproject />
        ) : window.location.pathname == '/meetingforacoffee' ? (
          <Meetingforacoffee />
        ) : window.location.pathname == '/planavideocall' ? (
          <Planavideocall />
        ) : (
          window.location.pathname == '/birdsandbees' && <Birdsandbees />
        )}
      </div>
    );
  }
}

export default Contact;
