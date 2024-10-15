import React, { Component } from "react";
import PostCard from "./PostCard";
import {Link} from 'react-router-dom';

class Post extends Component {
    remove(id){
        this.props.removePost(id);
    }

    render() {
        //console.log(this); // Logs the current component instance
        return (
            <div>
                <Link to="/add">
                    <button className="btn btn-primary btn-sm float-end" >
                        Add
                        <i className="fa fa-add"></i>  
                    </button>
                    <br></br>
                    <br></br>
                </Link>
            
                
                {
                    this.props.posts.map(post => <PostCard key={post.id} post={post} remove={this.remove.bind(this)} />)    
                }
            </div>
        );
    };
}

export default Post;