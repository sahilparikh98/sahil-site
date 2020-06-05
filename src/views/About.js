import React from 'react';
import DocumentTitle from 'react-document-title';
import {Container, Row, Col} from 'react-bootstrap';
import WorkExperience from '../components/WorkExperience';

const jobs = [
  {
    company: "yext",
    position: "software engineer",
    team: "yext answers",
    year: "august 2020 - present"
    
  },
  {
    company: "yext",
    position: "software engineering intern",
    team: "ux engineering",
    year: "summer 2019"
  },
  {
    company: "j.p. morgan chase",
    position: "software engineering intern",
    team: "process automation",
    year: "summer 2018"
  },
  {
    company: "cox automotive",
    position: "software engineering intern",
    team: "front-end features and tooling",
    year: "summer 2017"
  }
]

export default class About extends React.Component {

  createWorkExperience() {
    return jobs.map((job) => {
      return <WorkExperience 
                company={job.company}
                position={job.position}
                team={job.team}
                year={job.year}
              />
    })
  }

  render() {
    return (
      <DocumentTitle title="sahil parikh - about">
        <Container>
          <div className="main-content">
            <Row>
              <Col sm={5}>profile picture</Col>
              <Col sm={7}>
                <h3>work experience:</h3>
                {this.createWorkExperience()}
              </Col>
            </Row>
          </div>
        </Container>
      </DocumentTitle>
    );
  }
}