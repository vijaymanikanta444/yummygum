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
        <div className="options">
          <input
            className="radio"
            type="radio"
            onClick={props.click}
            value="yourgreatproject"
            checked={props.state.selected == '/yourgreatproject'}
            id="yourgreatproject"
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
        {/* <div>
          <input type="radio" id="huey" name="drone" value="huey"
                checked/>
          <label for="huey">Huey</label>
        </div>

        <div>
          <input type="radio" id="dewey" name="drone" value="dewey"/>
          <label for="dewey">Dewey</label>
        </div>

        <div>
          <input type="radio" id="louie" name="drone" value="louie"/>
          <label for="louie">Louie</label>
        </div> */}
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
