import React, { Component } from "react";
import BlogPosts from "./BlogPosts/BlogPosts";
import Form from "./Form/Form";
import Switch from "./Switch/Switch";
import "./Main.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isForm: true,
    };
    // this.getPosts = this.getPosts.bind(this); for regular method syntax
  }

  getPosts=(post)=>{
    
    // let arr=this.state.posts.slice();
    // arr.push(post)
    // this.setState({posts: arr})
    this.setState({ posts: [...this.state.posts, post] });
  };
  switchVisibilityForm = (isForm) => {
    this.setState({ isForm: isForm });
  };
  render() {
    return (
      <div className="Main">
        <Switch switchVisibilityForm={this.switchVisibilityForm} />
        {this.state.isForm ? (
          <Form getPosts={this.getPosts} />
        ) : (
          <BlogPosts posts={this.state.posts} />
        )}
      </div>
    );
  }
}
export default Main;
