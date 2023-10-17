// Import necessary modules and functions from React.
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import spinner from "../../components/animations/loading.json";
import {
  PostHeader,
  PostItems,
  PostTitle,
  Postlists,
  PostsContainer,
  PostButton,
} from "./PostsElements";

// Create a functional component named Posts.
const Posts = () => {
  // Define state variables 'data' and 'error' using the 'useState' hook.
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Use the 'useEffect' hook to perform side effects in the component.
  useEffect(() => {
    // Define an asynchronous function 'fetchData' to fetch data from an API.
    const fetchData = async () => {
      try {
        // Send an HTTP GET request to the specified URL.
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        // Check if the response is not OK (HTTP status code other than 200).
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        // Parse the response JSON data and set it to the 'data' state.
        const data = await response.json();
        setData(data);
        setIsLoading(false); // Set loading to false when data is fetched.
      } catch (error) {
        // Handle any errors that occur during the fetch and set the 'error' state.
        setError(error);
        setIsLoading(false); // Set loading to false if an error occurs.
      }
    };

    // Invoke the 'fetchData' function when the component mounts (empty dependency array).
    fetchData();
  }, []);

  // If there's an error, render a message displaying the error.
  if (error) {
    return <PostsContainer>Error: {error.message}</PostsContainer>;
  }
  if (isLoading) {
    // Display a loading message or loading spinner while data is being fetched.
    return (
      <PostsContainer>
        <Lottie animationData={spinner} style={{ height: "150px" }} />
      </PostsContainer>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleDeletePost = async (postId) => {
    try {
      // Send an HTTP DELETE request to the JSONPlaceholder API to delete the post with the specified ID.
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Check if the response is not OK (HTTP status code other than 200).
      if (!response.ok) {
        throw new Error("Failed to delete the post");
      }

      // Remove the deleted post from the 'data' state.
      const updatedData = data.filter((post) => post.id !== postId);
      setData(updatedData);
    } catch (error) {
      // Handle any errors that occur during the delete request and set the 'error' state.
      setError(error);
    }
  };

  // Render the fetched data as a list of posts if no error occurred.
  return (
    <PostsContainer>
      <PostHeader>POSTS</PostHeader>
      <PostItems>
        {data.map((post) => (
          // Render each post with a unique 'key' and its 'title'.
          <Postlists key={post.id}>
            <p>Create by USER ID: {post.userId}</p>
            <PostTitle>{post.title}</PostTitle>
            <p>{post.body}</p>
            <div style={{ display: "flex", gap: "20px", paddingTop: "20px" }}>
              <PostButton onClick={() => handleDeletePost(post.id)}>
                Delete Post
              </PostButton>

              <Link to={`/posts/${post.id}/comments`}>
                <PostButton>View Comments</PostButton>
              </Link>
            </div>
          </Postlists>
        ))}
      </PostItems>
    </PostsContainer>
  );
};

// Export the 'PostData' component as the default export of this module.
export default Posts;
