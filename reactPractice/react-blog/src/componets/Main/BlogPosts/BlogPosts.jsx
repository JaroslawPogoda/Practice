import React, { Component} from 'react';
import Post from './Post/Post'


class BlogPosts extends Component {
    constructor(props) {
        super(props);
    
    }
    render() {
       
        
    return(
        <div className="BlogPosts"> 
            {this.props.posts.map((post,index)=><Post post={post} key={index}/>)}
        </div>
    );
}    
}
export default BlogPosts;