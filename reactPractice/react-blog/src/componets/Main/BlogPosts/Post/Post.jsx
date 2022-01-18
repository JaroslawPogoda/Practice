import React, { Component} from 'react';
import './Post.css'


class Post extends Component {
      

    render() {
    return(
        <section className="Post">
            <h1 className="Title">
                {this.props.post.title}
            </h1>
            <p className="Username">{this.props.post.username}</p>
            <article className="Article">{this.props.post.post}</article>
        </section>
    );    
    }
}
export default Post;