import React from 'react';
import { Link } from 'react-router-dom';

export default function Success() {
  return (
    <div className="center success">
      <div className="block">
        {/* <h1 className="successheading1">success</h1> */}

        <h1 className="successThanks">Thanks! 📬</h1>
        <p className="successpara">
          {' '}
          “Details have been captured successfully”
        </p>

        <div className="mt50">
          <Link className="button" to="/" type="button">
            Back to Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
