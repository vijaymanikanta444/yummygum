import React, { Component } from 'react';

export class Contact extends Component {
  state = {
    about: [
      'Your great project',
      'Meeting for a coffee',
      'Birds and bees',
      'Plan a video call',
    ],
    selected: '',
  };

  click = (e) => {
    this.setState({ selected: e.target.value });
  };

  render() {
    return (
      <div className="contactBlock">
        <div>
          <h1 className="contactT1">Let’s talk.</h1>
          <p className="contactT2">Share your excitement with us.</p>
          <p>info@yummygum.com</p>
        </div>
        <div>
          <h2 className="contactT3">Let's talk about</h2>
          {this.state.about.map((element) => (
            <div className="options">
              <input
                className="radio"
                type="radio"
                onClick={this.click}
                value={element}
                // checked={(this.state.selected = { element })}
              />{' '}
              <label className="labelOption">{element}</label>
            </div>
          ))}
        </div>
        <div>
          <button className="button">Next</button>
        </div>
      </div>
    );
  }
}

export default Contact;
