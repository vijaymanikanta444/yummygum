import React from 'react';
import { Link } from 'react-router-dom';

export default function Demo(props) {
  return (
    <div>
      <div>
        <h1 className="contactT1">Let’s talk.</h1>
        <p className="contactT2">Share your excitement with us.</p>
        <p className="mail">info@yummygum.com</p>
      </div>
      <div className="contact2">
        <h2 className="contactT3">Let's talk about</h2>
        {/* {this.state.about.map((element) => (
            <div className="options">
              <input
                className="radio"
                type="radio"
                onClick={this.click}
                value={element}
                // checked={(this.state.selected == { element })}
              />{' '}
              <label className="labelOption">{element}</label>
            </div>
          ))} */}
        <div className="options">
          <input
            className="radio"
            type="radio"
            onClick={props.click}
            value="yourgreatproject"
            checked={props.state.selected == '/yourgreatproject'}
          />{' '}
          <label className="labelOption">Your great project</label>
        </div>
        <div className="options">
          <input
            className="radio"
            type="radio"
            onClick={props.click}
            value="meetingforacoffee"
            checked={props.state.selected == '/meetingforacoffee'}
          />{' '}
          <label className="labelOption">Meeting for a coffee</label>
        </div>
        <div className="options">
          <input
            className="radio"
            type="radio"
            onClick={props.click}
            value="birdsandbees"
            checked={props.state.selected == '/birdsandbees'}
          />{' '}
          <label className="labelOption">Birds and bees</label>
        </div>
        <div className="options">
          <input
            className="radio"
            type="radio"
            onClick={props.click}
            value="planavideocall"
            checked={props.state.selected == '/planavideocall'}
          />{' '}
          <label className="labelOption">Plan a video call</label>
        </div>
      </div>
      <div className="mt50">
        <Link
          className="button"
          onClick={props.next}
          to={props.state.selected}
          type="button"
        >
          Next
        </Link>
      </div>
    </div>
  );
}
