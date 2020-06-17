import React from 'react';
import marked from 'marked';
import { Container, Row, Col } from 'react-bootstrap';

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