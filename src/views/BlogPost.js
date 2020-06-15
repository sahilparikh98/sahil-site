import React from 'react';

const blogInfo = {
  1: {
    id: 1,
    date: "mar 22",
    title: "title",
    subtitle: "subtitle",
    blogPath: "/creative/2/",
  },
  2: {
    id: 2,
    date: "jun 06",
    title: "other title",
    subtitle: "other subtitle",
    blogPath: "/creative/2/",
  }
};

export default class BlogPost extends React.Component {

  generateMarkup() {
    const blog = blogInfo[this.props.match.params.blogId];
    return (
      <div>
        <h3>{blog.title}</h3>
        <h4>{blog.subtitle}</h4>
      </div>
    )
  }
  render() {
    return (
      <div>
        {this.generateMarkup()}
      </div>
    );
  }
}