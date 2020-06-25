import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import PillBox from "./PillBox";

export default class Project extends React.Component {
  render() {
    return (
      <Col xl="4" className="col-padding" align="center">
        <div className="rectangle">
          <Row className="justify-content-md-center">
            <Col sm={true} className="project-content" align="left">
              <div className="project-box">
                <div className="icon-wrap">
                  <Image className="icon-resize" src={this.props.image} />
                </div>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col sm={true} className="project-content-title" align="center">
              <div className="project-box">
                <h3 className="title-heading">{this.props.name}</h3>
                <p className="project-type">{this.props.type}</p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col sm={true} className="project-content-description" align="left">
              <div className="project-box">
                <div className="project-description">
                  <p>{this.props.description}</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col className="project-content-description" align="left">
              <div className="project-tech">
                <h6>built with:</h6>
                <PillBox names={this.props.tech} />
              </div>
            </Col>
            <Col className="project-content-description" align="left">
              <a href={this.props.git} className="project-link">
                view the code
              </a>
            </Col>
          </Row>
        </div>
      </Col>
    );
  }
}
