import React from "react";
import DocumentTitle from "react-document-title";
import { Container, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import PillBox from "../components/PillBox";
import PostInfo from "../posts/PostInfo";

export default class Creative extends React.Component {
  createBlogPath = (blog) => {
    const pathStr = "/creative/" + blog.date.slice(0, 6) + "-" + blog.title;
    return pathStr.replace(/\s+/g, "-").toLowerCase();
  }
  createBlogList = () => {
    return PostInfo.info.map((blog) => {
      return (
        <Row>
          <Col sm={2}>
            <h4>{blog.date.slice(0, 6)}</h4>
          </Col>
          <Col sm={10}>
            <LinkContainer to={this.createBlogPath(blog)}>
              <a href={this.createBlogPath(blog)} className="blog-list-link">
                <h3>{blog.title}</h3>
              </a>
            </LinkContainer>
            <PillBox names={blog.tags} />
          </Col>
        </Row>
      );
    });
  }

  render() {
    return (
      <DocumentTitle title="sahil parikh - creative">
        <Container>
          <div className="creative-page-header">
            <h2>writing</h2>
            <p>
              here you can find some of the stuff i've written. you can also
              check out some of my posts on{" "}
              <a
                href="https://medium.com/@sparikh98/"
                className="blog-list-link"
              >
                medium.
              </a>
            </p>
          </div>
          {this.createBlogList()}
        </Container>
      </DocumentTitle>
    );
  }
}
