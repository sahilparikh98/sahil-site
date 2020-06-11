import React from 'react';
import DocumentTitle from 'react-document-title'
import {Container, Row, Col} from 'react-bootstrap';

export default class Projects extends React.Component {
  createProjects() {

  }

  render() {
    return (
      <DocumentTitle title="sahil parikh - projects">
        <Container>
          <div className="main-content">
            <Row>
              <Col>
                <div className="twitter">
                  words
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </DocumentTitle>
    );
  }
}