import React from 'react';
import DocumentTitle from 'react-document-title'
import {Container, Row, Col} from 'react-bootstrap';
import Project from '../components/Project'

const projectData = [
  {
    name: "bet",
    type: "iOS app",
    git: "https://github.com/sahilparikh98/bet",
    description: "bet is an iOS app that allows you to create and share bets with friends. this was the first app i ever made courtesy of my friends at make school. it is now unusable",
    tech: ["swift", "parse"]
  },
  {
    name: "dialogue",
    type: "iOS app",
    git: "https://github.com/wlodawskymichael/dialogue",
    description: "a group messaging app that allows you to spectate conversations. this project was cool since it has real-time messaging using firebase. firebase is really neat and can take care of a lot of things for you.",
    tech: ["swift", "firebase"]
  },
  {
    name: "sahil-site",
    type: "react web app",
    git: "https://github.com/sahilparikh98/sahil-site",
    description: "my personal website, built using ReactJS and Bootstrap. it features my blog and other fun information about me.",
    tech: ["react"]
  },
  {
    name: "bet",
    type: "iOS app",
    git: "https://github.com/sahilparikh98/bet",
    description: "bet is an iOS app that allows you to create and share bets with friends. this was the first app i ever made courtesy of my friends at make school. it is now unusable",
    tech: ["swift", "parse"]
  },
  {
    name: "dialogue",
    type: "iOS app",
    git: "https://github.com/wlodawskymichael/dialogue",
    description: "a group messaging app that allows you to spectate conversations. this project was cool since it has real-time messaging using firebase. firebase is really neat and can take care of a lot of things for you.",
    tech: ["swift", "firebase"]
  }
]
const projectData2 = [
  {
    name: "bet",
    type: "iOS app",
    git: "https://github.com/sahilparikh98/bet",
    description: "bet is an iOS app that allows you to create and share bets with friends. this was the first app i ever made courtesy of my friends at make school. it is now unusable",
    tech: ["swift", "parse"]
  },
  {
    name: "dialogue",
    type: "iOS app",
    git: "https://github.com/wlodawskymichael/dialogue",
    description: "a group messaging app that allows you to spectate conversations. this project was cool since it has real-time messaging using firebase. firebase is really neat and can take care of a lot of things for you.",
    tech: ["swift", "firebase"]
  }
]

export default class Projects extends React.Component {

  generateImagePath(key) {
    return "./img/" + key + ".png";
  } 

  createProjects() {
    return projectData.map((project) => {
      return <Project 
                name={project.name}
                type={project.type}
                git={project.git}
                description={project.description}
                tech={project.tech}
                image={project.type === 'react web app' 
                                    ? this.generateImagePath('react') 
                                    : this.generateImagePath(project.name)}
            />
    })
  }

  createProjects2() {
    return projectData2.map((project) => {
      return <Project 
                name={project.name}
                type={project.type}
                git={project.git}
                description={project.description}
                tech={project.tech}
                image={project.type === 'react web app' 
                                    ? this.generateImagePath('react') 
                                    : this.generateImagePath(project.name)}
            />
    })
  }

  render() {
    return (
      <DocumentTitle title="sahil parikh - projects">
        <Container fluid="lg">
          <div className="main-content">
            <Row lg="2" md="2">
              <Col xl="4" align="center">
                <div className="page-header-padding">
                  <h2>projects</h2>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-md-center" lg="2" md="2">
              {this.createProjects()}
            </Row>
          </div>
        </Container>
      </DocumentTitle>
    );
  }
}