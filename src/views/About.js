import React from 'react';
import DocumentTitle from 'react-document-title';
import {Container, Row, Col} from 'react-bootstrap';

export default class About extends React.Component {
  render() {
    return (
      <DocumentTitle title="sahil parikh - about">
        <Container>
          <div className="main-content">
            <Row>
              <Col sm={5}>profile picture</Col>
              <Col sm={7}>
                <h3>work experience:</h3>
                <h5><b>software engineer @ yext</b></h5>
                <h6> - yext answers team</h6>
                <h5><b>software engineer intern @ yext</b></h5>
                <h6> - ux engineering team</h6>
                <h5><b>software engineer intern @ j.p. morgan chase</b></h5>
                <h6> - process automation team</h6>
                <h5><b>software engineer intern @ cox automotive</b></h5>
                <h6> - front-end features team</h6>
              </Col>
            </Row>
          </div>
        </Container>
      </DocumentTitle>
    );
  }
}