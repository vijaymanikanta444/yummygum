import React from 'react';
import * as AiIcons from 'react-icons/ai';

export default function Address(props) {
  return (
    <div
      className="addressBlock"
      style={{ left: props.slide == true ? '-85%' : '-37%' }}
    >
      <div>
        <h1 className="addressT1">We’re here</h1>
        <p className="addressT2">
          Our door is always open for a good cup of coffee.
        </p>
      </div>
      <div className="address2">
        <h2>Our Office</h2>
        <p className="addressT2">Jacob van Lennepkade 334-H</p>
        <p className="addressT2">1053 NJ Amsterdam</p>
        <p className="addressT2">The Netherlands 🇳🇱</p>
      </div>
      <div>
        <AiIcons.AiOutlineTwitter className="logo" />
        <AiIcons.AiFillInstagram className="logo" />
        <AiIcons.AiOutlineMedium className="logo" />
      </div>
    </div>
  );
}
