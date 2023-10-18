// Import necessary modules and functions from React.
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import spinner from "../../components/animations/loading.json";
import {
  AlbumsHeader,
  AlbumsItems,
  AlbumsTitle,
  Albumslists,
  AlbumsContainer,
  AlbumsButton,
} from "./AlbumElements";

// Create a functional component named Albumss.
const Albumss = () => {
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
          "https://jsonplaceholder.typicode.com/albums"
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
    return <AlbumsContainer>Error: {error.message}</AlbumsContainer>;
  }
  if (isLoading) {
    // Display a loading message or loading spinner while data is being fetched.
    return (
      <AlbumsContainer>
        <Lottie animationData={spinner} style={{ height: "150px" }} />
      </AlbumsContainer>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const handleDeleteAlbums = (albumId) => {
    // Create a new array of posts excluding the post with the given ID.
    const updatedData = data.filter((album) => album.id !== albumId);
    setData(updatedData);
  };

  // Render the fetched data as a list of Albumss if no error occurred.
  return (
    <AlbumsContainer>
      <AlbumsHeader>ALBUMS</AlbumsHeader>
      <AlbumsItems>
        {data.map((albums) => (
          // Render each Albums with a unique 'key' and its 'title'.
          <Albumslists key={albums.id}>
            <p>Create by USER ID: {albums.userId}</p>
            <AlbumsTitle>{albums.title}</AlbumsTitle>
            <div style={{ display: "flex", gap: "20px", paddingTop: "20px" }}>
              <AlbumsButton onClick={() => handleDeleteAlbums(albums.id)}>
                Delete Albums
              </AlbumsButton>

              <Link to={`/albums/${albums.id}/photos`}>
                <AlbumsButton>View Photos</AlbumsButton>
              </Link>
            </div>
          </Albumslists>
        ))}
      </AlbumsItems>
    </AlbumsContainer>
  );
};

// Export the 'AlbumsData' component as the default export of this module.
export default Albumss;
