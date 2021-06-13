import React from 'react';
import "react-slideshow-image/dist/styles.css";
import './Slideshow.css';
import { Slide } from 'react-slideshow-image';

const slideImages = [
'https://image.shutterstock.com/image-photo/office-desk-table-keyboard-notebook-260nw-530163331.jpg',
'https://www.w3schools.com/w3images/workbench.jpg',
 'https://www.indeed.com/about/imgs/header-image.jpg',
  'https://image.shutterstock.com/image-photo/creative-flat-fay-workspace-stationery-260nw-1920075392.jpg',
  
];

const Slideshow = () => {
    return (
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`,}}>
             
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
              
            </div>
            
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;