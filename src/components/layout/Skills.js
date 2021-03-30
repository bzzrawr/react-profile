import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'

const Skills = () => {
    return (
      <section className="page-section" id="skills">
        <div className="service-section-title">
          <Container>
            <Row>
              <Col>
                <div className="text-center">
                  <h2 className="section-heading text-uppercase">skills</h2>
                  <h3 className="section-subheading text-muted">This section shows the skills I have</h3>
                </div>
              </Col>
            </Row></Container></div>
      </section>   
      
    )
}

export default Skills
