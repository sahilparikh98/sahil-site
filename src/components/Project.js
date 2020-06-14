import React from "react";
import { Row, Col, Image} from "react-bootstrap";
import Pill from './Pill'



export default class Project extends React.Component {

  generatePills(technologies) {
    return technologies.map((technology) => {
       return <Pill>{technology}</Pill>
    });
  }

  render() {
    return (
      <Col xl="4" className="col-padding" align="center">
        <div className="rectangle">
          <Row className="justify-content-md-center">
            <Col sm={true} className="project-content-title" align="left">
              <div className="project-box">
                <div className="project-title">
                  <h3>
                    {this.props.name}, {this.props.type}
                  </h3>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col sm={true} className="project-content" align="left">
              <div className="icon-wrap">
                <Image className="icon-resize" src={this.props.image} />
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
                <h6>technologies:</h6>
                {this.generatePills(this.props.tech)}
              </div>
            </Col>
            <Col className="project-content-description" align="left">
              <a href={this.props.git} className="project-link">
                view on github
              </a>
            </Col>
          </Row>
        </div>
      </Col>
    );
  }
}
