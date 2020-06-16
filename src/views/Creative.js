import React from "react";
import DocumentTitle from "react-document-title";
import { Container, Row, Col } from 'react-bootstrap';
import Pill from "../components/Pill";

const blogInfo = [
  {
    id: 1,
    date: "mar 22",
    title: "can friction in a system ever be useful?",
    blogPath: "/creative/1/",
  }
]

export default class Creative extends React.Component {

  createBlogPath(blogId) {
    return "/creative/" + blogId;
  }
  createBlogList() {
    return blogInfo.map((blog) => {
      return (
        <Row>
          <Col sm={2}>
            <h3>{blog.date}</h3>
            <h3>2020</h3>
          </Col>
          <Col sm={10}>
            <a href={blog.blogPath} className="blog-list-link">
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
