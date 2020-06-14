import React from "react";
import { Row, Col, Image} from "react-bootstrap";

export default function Project(props) {
  return (
    <Col md={true} lg="4" className="col-padding">
      <div className="rectangle">
        <Row className="justify-content-md-center">
          <Col sm={true} className="project-content-title">
            <div className="project-box">
              <div className="project-title">
                <h3>
                  {props.name}, {props.type}
                </h3>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col sm={true} className="project-content">
            <div className="icon-wrap">
              <Image className="icon-resize" src={props.image} />
            </div>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col sm={true} className="project-content-description">
            <div className="project-box">
              <div className="project-description">
                <p>{props.description}</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col sm={true} className="project-content-description">
            <div className="project-tech">
              <h6>technologies:</h6>
              <p className="project-tech-pill-bottom">{props.tech}</p>
            </div>
          </Col>
          <Col sm={true} lg="5" className="project-content-description">
            <a href={props.git} className="project-link">
              view on github
            </a>
          </Col>
        </Row>
      </div>
    </Col>
  );
}
