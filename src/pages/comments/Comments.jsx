// Import necessary modules and functions from React.
import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import spinner from "../../components/animations/loading.json";
import {
  CommentsContainer,
  CommentsHeader,
  CommentsItems,
  Commentslists,
} from "./CommentsElements";

// Create a functional component named Comments.
const Comments = () => {
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
          "https://jsonplaceholder.typicode.com/comments"
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
    return <CommentsContainer>Error: {error.message}</CommentsContainer>;
  }
  if (isLoading) {
    // Display a loading message or loading spinner while data is being fetched.
    return (
      <CommentsContainer>
        <Lottie animationData={spinner} style={{ height: "150px" }} />
      </CommentsContainer>
    );
  }
  // Render the fetched data as a list of posts if no error occurred.
  return (
    <CommentsContainer>
      <CommentsHeader>ALL COMMENTS</CommentsHeader>
      <CommentsItems>
        {data.map((comment) => (
          // Render each post with a unique 'key' and its 'title'.
          <Commentslists key={comment.id}>
            <p>
              <strong>Comment ID:</strong> {comment.postId}
            </p>
            <p>
              <strong>Subject:</strong> {comment.name}
            </p>
            <p>
              <strong>Author Email:</strong> {comment.email}
            </p>
            <p>
              <strong>Comment:</strong> {comment.body}
            </p>
          </Commentslists>
        ))}
      </CommentsItems>
    </CommentsContainer>
  );
};

// Export the 'Comments' component as the default export of this module.
export default Comments;
