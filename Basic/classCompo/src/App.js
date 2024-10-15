import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Post from "./components/Post";
import AddPost from "./components/AddPost";
import PostDetail from "./components/PostDetail";
import EditPost from "./components/EditPost";

function App() {
  const END_POINT = "http://localhost:5000/posts"; 
  const [posts, setPosts] = useState([]); 

  
  let addPost_fn = async (post) => {
    console.log("Post is", post);

    await fetch(END_POINT, {
      method: "POST",
      body: JSON.stringify({
        title: post.title,
        desc: post.desc
      }),
      headers:{
        "content-type":"application/json"
      }
    });
    setPosts([post, ...posts]); 
  };

  

  // useEffect(async() => {
  //   // let response = await fetch(`${END_POINT}`/posts);
  //   // let data = await response.json();
  //   let posts = await(await fetch(`${END_POINT}`/posts)).json();
  //   // console.log(posts); 
  //   setPosts(posts);
  // }, []); 
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(END_POINT);
        let posts = await response.json();
        console.log("fetching data from server ",posts);
        setPosts(posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
  
    fetchData();
  }, []);


  // Delete 
  // const postDeleteHandler = async (id) => {
  //   await fetch(END_POINT +"/" + id, {
  //     method: "DELETE"
  //   });
  //   setPosts(posts.filter(post => post.id != id));
  // };

    // Delete 
    // const postDeleteHandler = async (id) => {
    //   try {
    //     // Send a DELETE request to the server to remove the post by id
    //     const response = await fetch(`${END_POINT}/${id}`, {
    //       method: 'DELETE',
    //     });
    
    //     // Check if the response is ok (status code 200-299)
    //     if (!response.ok) {
    //       throw new Error(`Failed to delete the post with id: ${id}`);
    //     }
    
    //     // Get the current posts from localStorage
    //     let storedPosts = JSON.parse(localStorage.getItem(END_POINT)) || [];
    
    //     // Filter out the post by id
    //     const updatedPosts = storedPosts.filter(post => post.id !== id);
    
    //     // Update the posts state with the filtered posts
    //     setPosts(updatedPosts);
    
    //     // Update localStorage with the new array or empty array if no posts left
    //     localStorage.setItem(END_POINT, JSON.stringify(updatedPosts.length === 0 ? [] : updatedPosts));
    
    //     console.log(`Post with id: ${id} has been successfully deleted!`);
    
    //   } catch (error) {
    //     console.error("Error deleting the post:", error.message);
    //   }
    // };
    
    const postDeleteHandler = async (id) => {
      // Immediately update the state to reflect the deleted post
      const updatedPosts = posts.filter(post => post.id !== id);
      setPosts(updatedPosts);
    
      try {
        // Now make the DELETE request asynchronously
        const response = await fetch(END_POINT + "/" + id, {
          method: "DELETE",
        });
    
        if (!response.ok) {
          throw new Error('Failed to delete the post');
        }
    
        console.log(`Post with id ${id} deleted from server`);
      } catch (error) {
        console.error("Error deleting post:", error.message);
        // Optionally, revert the state if the request fails
        setPosts(posts); // Restore original posts if there's an error
      }
    };
    
    const updatedPostHandler = async (updateThePost) => {
      // console.log("Update Post is ", updateThePost);
      await fetch (END_POINT+ "/" + updateThePost.id, {
        method: "PATCH",
        body: JSON.stringify(updateThePost),
        headers: {
          "content-type": "application/json"
        }
      });
      setPosts(posts.map(po => po.id === updateThePost.id ? updateThePost: po));
    }
    
    

  
  return (
    <div className="container">
      <h1 className="text-center text-info my-3">Posts</h1>
      
      <Router>
        <Routes>
          <Route path="/" element={<Post posts={posts} removePost={postDeleteHandler} />} />
          
          <Route path="/add" element={<AddPost addpost={addPost_fn} />} />

          <Route path="/post/:id" element={<PostDetail  />} />

          <Route path="/edit/:id" element={<EditPost update={updatedPostHandler} />} />

        </Routes>
      </Router>

       
    </div>
  );
}

export default App;
