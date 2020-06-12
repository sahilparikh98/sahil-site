import React from 'react';
import DocumentTitle from 'react-document-title'
import {Container, Row} from 'react-bootstrap';
import Project from '../components/Project'

export default class Projects extends React.Component {
  createProjects() {

  }

  render() {
    return (
      <DocumentTitle title="sahil parikh - projects">
        <Container>
          <div className="main-content">
            <Row className="justify-content-md-center">
              <Project words="words words words" />
              <Project words="words words words" />
              <Project words="words words words" />
              <Project words="words words words" />
            </Row>
          </div>
        </Container>
      </DocumentTitle>
    );
  }
}