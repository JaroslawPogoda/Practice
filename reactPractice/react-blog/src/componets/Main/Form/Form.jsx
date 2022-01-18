import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {  
        username: '',
        title: '',
        post: ''
        
    }
}
handleChange = event => {
    this.setState({ [event.target.id]: event.target.value })
    this.setState({submitted: true})
}

handleSubmit = event => {      ///    onClick ... onChange ... onSubmit
    event.preventDefault()
    console.log(this.state)
    this.props.getPosts(this.state)
}
  render() {
    return (
      <div className="Form">
        <form onSubmit={this.handleSubmit} className="cf">
          <label htmlFor="username">Name:</label>
          <input
            id="username"
            onChange={this.handleChange}
            value={this.state.username}
          />

          <label htmlFor="title">Title:</label>
          <input
            id="title"
            onChange={this.handleChange}
            value={this.state.title}
            type="title"
          />

          <label htmlFor="post">Post:</label>
          <textarea
            maxLength="500"
            id="post"
            onChange={this.handleChange}
            value={this.state.post}
            type="post"
          />

          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default Form;
