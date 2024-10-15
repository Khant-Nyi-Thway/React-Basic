import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";

class AddPost extends Component {

   state = {
      title: "",
      desc: ""
   }

   overrideNewData = (e) => {
      e.preventDefault();
      this.props.addpost({id:uuidv4(),...this.state});
      //console.log("new User state is ", this.state);

      //after clicking add button in add new post, clear all holdvalue(override again)
      this.setState({
         title: "",
         desc: ""
      });
      this.props.navigate("/");
      
   } 


    render() {
      // console.log("addpost", e);
        return (
            <div className="card bg-dark px-5">
            <h3 className="text-white text-center mt-3">Add new Post</h3>
            <form onSubmit={this.overrideNewData}>
               <div className="mb-1">
                  <label htmlFor="title" className="text-white form-label">Post Title</label>
                  <input type="text" className="form-control rounded-0" id="title"
                    onChange={e => this.setState({title: e.target.value})}
                    value={this.state.value}
                  />
               </div>
               <div className="mb-3">
                  <label htmlFor="desc" className="text-white form-label">Post Description</label>
                  <input type="text" className="form-control rounded-0" id="desc"
                     onChange={e => this.setState({desc: e.target.value})}
                     value={this.state.value}
                  />
               </div>
               <button type="submit" className="btn btn-primary btn-sm float-end mb-3">Add</button>
            </form>
         </div>
        );
    }
}

// export default AddPost;

export default (props) => {
   const navigator = useNavigate();
   return <AddPost {...props} navigate={navigator} />
}