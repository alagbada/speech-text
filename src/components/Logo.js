import React from 'react';
import microphone from './microphone.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className="mic">
      <img alt="microphone" src={microphone} height='300'/>
    </div>

  );
}

export default Logo;
