import React from 'react';
import PropTypes from 'prop-types';
import background from '../assets/white-texture-background.jpg';


function Background() {
  return (
    <div>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous" />
      <div>
        <img src = { background } />
      </div>
      <div>
        <i class="fas fa-dollar-sign"></i>
      </div>
    </div>
  )
}

export default Background;
