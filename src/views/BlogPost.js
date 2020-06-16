import React from 'react';
import marked from 'marked';

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

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const readmePath = require("../posts/1.md");
    console.log("in component did mount");
    fetch(readmePath)
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
      <div>
        <h3>{blog.title}</h3>
        <h4>{blog.subtitle}</h4>
        <section>
          <article dangerouslySetInnerHTML={{ __html: markdown }}></article>
        </section>
      </div>
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