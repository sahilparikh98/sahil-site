import React from 'react';
import marked from 'marked';
import { Container, Row, Col } from 'react-bootstrap';
var fs = require("fs");

const blogInfo = {
  2: {
    id: 2,
    date: "mar 22",
    title: "title",
    blogPath: "/creative/2/",
  },
  1: {
    id: 1,
    date: "jun 06",
    title: "can friction in a system ever be useful?",
    blogPath: "/creative/2/",
  }
};

export default class BlogPost extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const blogPath = 'https://raw.githubusercontent.com/sahilparikh98/sahil-site/master/src/posts/' + 
    this.props.match.params.blogId + '.md';
    fetch(blogPath)
    .then(response => {
      return response.text()
    })
    .then(text => {
      this.setState({
        markdown: marked(text)
      })
    })
  }

  generateMarkup() {
    const blog = blogInfo[this.props.match.params.blogId];
    const { markdown } = this.state;
    return (
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col lg="6">
            <a href="/creative/">⟨ back to writing</a>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col lg="6">
            <h3>{blog.title}</h3>
            <section>
              <article dangerouslySetInnerHTML={{ __html: markdown }}></article>
            </section>
          </Col>
        </Row>
      </Container>
    );
  }
  
  render() {
    return (
      <div>
        {this.generateMarkup()}
      </div>
    );
  }
}