import React from "react";
import DocumentTitle from "react-document-title";
import { Container, Row, Col } from "react-bootstrap";
import WorkExperience from "../components/WorkExperience";
import SocialMedia from "../components/SocialMedia";

const jobs = [
  {
    company: "yext",
    position: "software engineer",
    team: "yext answers",
    year: "august 2020 - present",
  },
  {
    company: "yext",
    position: "software engineering intern",
    team: "ux engineering",
    year: "summer 2019",
  },
  {
    company: "j.p. morgan chase",
    position: "software engineering intern",
    team: "process automation",
    year: "summer 2018",
  },
  {
    company: "cox automotive",
    position: "software engineering intern",
    team: "front-end features and tooling",
    year: "summer 2017",
  },
];

const socials = {
  twitter: "https://twitter.com/sahilparikh98",
  instagram: "https://instagram.com/sahilparikh98",
  linkedin: "https://linkedin.com/sparikh98",
  github: "https://github.com/sahilparikh98",
};

export default class About extends React.Component {
  createWorkExperience() {
    return jobs.map((job) => {
      return (
        <WorkExperience
          company={job.company}
          position={job.position}
          team={job.team}
          year={job.year}
        />
      );
    });
  }

  render() {
    return (
      <DocumentTitle title="sahil parikh - about">
        <Container>
          <div className="main-content">
            <Row>
              <Col sm={5} className="col-padding">
                <h3>about me</h3>
                <p className="row-spacing">
                  i recently graduated from the university of texas at austin
                  with a degree in computer science and a minor in business. i’m
                  a builder by nature and choice, and i love working on products that don’t
                  stop at just solving a problem, but inducing delight. my
                  technical interests lie in whatever people interact with, but
                  mainly front-end development and iOS app development.
                </p>
                <p>
                  my non-technical interests mostly take up in writing, comedy,
                  cooking and coffee. email me if you want to talk about any of
                  these, or none of these, i promise you that i can be a very
                  fun email buddy. or find me on any of the social networks.
                </p>
                <SocialMedia socials={socials} />
              </Col>
              <Col sm={7}>
                <h3>work</h3>
                {this.createWorkExperience()}
              </Col>
            </Row>
          </div>
        </Container>
      </DocumentTitle>
    );
  }
}
