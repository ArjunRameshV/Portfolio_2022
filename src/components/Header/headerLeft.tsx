import React, { useState } from 'react';
import Typography from '@mui/material/Typography';


function Example() {
    return (
      <div className="header_left">
        <div className="header_left_container">
          {/* random image from online */}
          <img src="" alt="" srcSet="" className="header_left_container_img"/>
        </div>
        <Typography variant="h2" gutterBottom fontFamily="Roboto" className="header_left_name">
            Arjun Ramesh
        </Typography>
      </div>
    );
  }

export default Example;