import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
// import PFP from './assets/img/pfp.jpg'
// import Figure from 'react-bootstrap/Figure';
// import Carousel from 'react-bootstrap/Carousel';

const Header = () => {

    return (
      <div className="mainHeader">
        <Container>
          <Row>
            <Col xs={12} lg={8}>
              <div className="site-banner caption">
                <container><h1>Welcome To My Website!</h1>
                <h2>HEY, I'M SYAFIQ ALI.</h2>
                <h3>I am a self-learned programmer seeking an opportunity to extend my web and software development skills and knowledge.</h3>
                <a className="btn btn-xl btn-primary js-scroll-trigger" href="/">WORK IN PROGRESS!</a></container>
              </div>
            </Col>
            <Col xs={6} lg={4}>
            </Col>
          </Row>
        </Container>
      </div>
    )
}

export default Header
