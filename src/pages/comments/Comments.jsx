// Import necessary modules and functions from React.
import React, { useState, useEffect } from "react";
import {
  CommentsContainer,
  CommentsItems,
  Commentslists,
} from "./CommentsElements";

// Create a functional component named Comments.
const Comments = () => {
  // Define state variables 'data' and 'error' using the 'useState' hook.
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

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
      } catch (error) {
        // Handle any errors that occur during the fetch and set the 'error' state.
        setError(error);
      }
    };

    // Invoke the 'fetchData' function when the component mounts (empty dependency array).
    fetchData();
  }, []);

  // If there's an error, render a message displaying the error.
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Render the fetched data as a list of posts if no error occurred.
  return (
    <CommentsContainer>
      <h2>COMMENTS</h2>
      <CommentsItems>
        {data.map((comment) => (
          // Render each post with a unique 'key' and its 'title'.
          <Commentslists key={comment.id}>
            <p>{comment.name}</p>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
          </Commentslists>
        ))}
      </CommentsItems>
    </CommentsContainer>
  );
};

// Export the 'Comments' component as the default export of this module.
export default Comments;
