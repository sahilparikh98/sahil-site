import React from "react";
import DocumentTitle from "react-document-title";
import { Container, Row, Col } from 'react-bootstrap';
import Pill from "../components/Pill";
import PostInfo from "../posts/PostInfo";

export default class Creative extends React.Component {

  createBlogPath(blog) {
    const pathStr = "/creative/" + blog.date + "-" + blog.title;
    return pathStr.replace(/\s+/g, "-").toLowerCase();
  }
  createBlogList() {
    return PostInfo.info.map((blog) => {
      return (
        <Row>
          <Col sm={2}>
            <h3>{blog.date}</h3>
          </Col>
          <Col sm={10}>
            <a href={this.createBlogPath(blog)} className="blog-list-link">
              <h3>{blog.title}</h3>
            </a>
            <Pill>tech</Pill>
          </Col>
        </Row>
      )});
  }

  render() {
    return (
      <DocumentTitle title="sahil parikh - creative">
        <Container>
            {this.createBlogList()}
        </Container>
      </DocumentTitle>
    );
  }
}
