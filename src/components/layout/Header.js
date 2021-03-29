import React from 'react';
import Container from 'react-bootstrap/Container'
import PFP from './assets/img/profile-img.jpg'
import Figure from 'react-bootstrap/Figure';
// import Carousel from 'react-bootstrap/Carousel';

const Header = () => {

    return (
      <div className="mainHeader">
        <div className="site-banner">
          <div className="site-banner caption">
            <h1>Welcome To My Website!</h1>
            <h2>HEY, I'M SYAFIQ ALI</h2>
            <h3>This website tells you more on Bob's background.</h3>
          
          </div> 
          <div className="site-banner my-img">
          </div>
        
  
        </div>
      </div>
    )
}

export default Header
