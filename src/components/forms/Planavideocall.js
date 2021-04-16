import React from 'react';
import { Link } from 'react-router-dom';

export default function Planavideocall() {
  return (
    <div>
      <h1 className="title">Let's plan a video call! 🎥</h1>

      <p className="subTitle mt20"> Personal details</p>

      <div className="mt50">
        <Link className="button" to="/success" type="button">
          Submit
        </Link>
      </div>
    </div>
  );
}
