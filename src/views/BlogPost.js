import React from "react";
import marked from "marked";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import PillBox from "../components/PillBox";

export default class BlogPost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    const blogPath =
      "https://raw.githubusercontent.com/sahilparikh98/sahil-site/master/src/posts/" +
      this.props.match.params.blogId +
      ".md";
    fetch(blogPath)
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        const textSplit = text.split("---");
        const metadata = textSplit[0].split("  ");
        this.setState(
          {
            time: metadata[1],
            pills: metadata[2].split("/"),
            title: marked(metadata[0]),
            markdown: marked(textSplit[1]),
            loading: false,
          },  
        );
      });
  }

  generateMarkup = () => {
    const { markdown, title, loading } = this.state;
    return (
      <Container fluid>
        <Row className="justify-content-md-center blog-post-back-link">
          <Col lg="5">
            <LinkContainer to="/creative">
              <a href="/creative/" className="blog-list-link">
                ⟨ back to writing
              </a>
            </LinkContainer>
          </Col>
        </Row>
        {loading ? (
          <Row className="justify-content-md-center">
            <Col lg="5">
              <Spinner animation="grow" />
            </Col>
          </Row>
        ) : (
          <Row className="justify-content-md-center">
            <Col lg="5">
              <section>
                <article dangerouslySetInnerHTML={{ __html: title }}></article>
              </section>
              <Row className="blog-post-info">
                <Col>
                  <div className="blog-post-info-metadata">
                    by Sahil Parikh, {this.state.time} read
                  </div>
                </Col>
                <Col xs="auto">
                  <div className="blog-post-pills" align="right">
                    <PillBox names={this.state.pills} />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="blog-post-line" />
                </Col>
              </Row>
              <section className="blog-post-content">
                <article
                  dangerouslySetInnerHTML={{ __html: markdown }}
                ></article>
              </section>
            </Col>
          </Row>
        )}
      </Container>
    );
  }

  render() {
    return <div>{this.generateMarkup()}</div>;
  }
}
