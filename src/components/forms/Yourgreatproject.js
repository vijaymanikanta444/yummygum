import React from 'react';
import { Link } from 'react-router-dom';

export default function Yourgreatproject() {
  return (
    <div>
      <h1>yourgreatproject</h1>
      <div className="mt50">
        <Link className="button" to="/success" type="button">
          Submit
        </Link>
      </div>
    </div>
  );
}
