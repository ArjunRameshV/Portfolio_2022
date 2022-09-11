import React, { useState } from 'react'
import Example from './headerLeft';

import './header.css';

function Header() {
    return (
      <div className="header">
        <div className="header_stars"></div>
        <div className="header_twinkle"></div>
        <div className="header_clouds"></div>
        <div className="header_animation">
          <Example />
          <div className="header_right">
          </div>
        </div>

        <div className="header_content">
        </div>
      </div>
    );
  }

export default Header;