import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Project(props) {
  return (
    <Col sm={true} lg="4" className="col-padding">
      <div className="rectangle">
        <Row>
          <Col className="project-content">
            <div className="project-box">
              <h3>bet, iOS app</h3>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="project-content">
            <div className="project-box">
              <p>bet is an iOS app that allows you to create and 
                share bets with friends. developed using Swift
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="project-content">
            <div className="project-link">view on github</div>
          </Col>
        </Row>
      </div>
    </Col>
  );
}
