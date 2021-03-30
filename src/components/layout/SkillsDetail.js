import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import {Figure} from 'react-bootstrap'


const SkillsDetail = () => {
    return (
      <section className="page-section">
        <div className="service-section">
          <Container>
              <Row>
                <Col lg>
                <Figure>
                <i class="fas fa-laptop-code"></i>
                  <Figure.Caption>
                    Programming
                  </Figure.Caption>
                </Figure>
                </Col>
                <Col lg>
                <Figure>
                <i class="fas fa-network-wired"></i>
                  <Figure.Caption>
                    Networking
                  </Figure.Caption>
                </Figure>
                </Col>
                <Col lg>
                <Figure>
                <i class="fas fa-tools"></i>
                  <Figure.Caption>
                    Troubleshooting
                  </Figure.Caption>
                </Figure>
                </Col>
              </Row>
            </Container>
        </div>    
      </section>   
      
    )
}

export default SkillsDetail
