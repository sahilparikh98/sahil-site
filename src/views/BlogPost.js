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
      const textSplit = text.split('---');
      this.setState({
        time: textSplit[0].split("  ")[1],
        title: marked(textSplit[0].split("  ")[0]),
        markdown: marked(textSplit[1])
      })
    })
  }

  generateMarkup() {
    const { markdown, title } = this.state;
    return (
      <Container fluid>
        <Row className="justify-content-md-center blog-post-back-link">
          <Col lg="5">
            <a href="/creative/">⟨ back to writing</a>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col lg="5">
            <section>
              <article dangerouslySetInnerHTML={{ __html: title }}></article>
            </section>
            <div className="blog-post-info">
              by Sahil Parikh, {this.state.time} read
            </div>
            <section className="blog-post-content">
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