// Import necessary modules and functions from React.
import React, { useState, useEffect } from "react";

import Lottie from "lottie-react";
import spinner from "../../components/animations/loading.json";
import {
  PhotosHeader,
  PhotosItems,
  PhotosTitle,
  Photoslists,
  PhotosContainer,
  PhotosButton,
} from "./PhotosElements";

// Create a functional component named Photoss.
const Photos = () => {
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
          "https://jsonplaceholder.typicode.com/photos"
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
    return <PhotosContainer>Error: {error.message}</PhotosContainer>;
  }
  if (isLoading) {
    // Display a loading message or loading spinner while data is being fetched.
    return (
      <PhotosContainer>
        <Lottie animationData={spinner} style={{ height: "150px" }} />
      </PhotosContainer>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleDeletePhotos = async (photoId) => {
    const updatedData = data.filter((photo) => photo.id !== photoId);
    setData(updatedData);
  };

  // Render the fetched data as a list of Photoss if no error occurred.
  return (
    <PhotosContainer>
      <PhotosHeader>ALL PHOTOS</PhotosHeader>
      <PhotosItems>
        {data.map((photo) => (
          // Render each Photos with a unique 'key' and its 'title'.
          <Photoslists key={photo.id}>
            <p>This Photos is under Album ID: {photo.albumId}</p>
            <PhotosTitle>{photo.title}</PhotosTitle>
            <div style={{ width: "50%" }}>
              <img
                src={photo.url}
                alt="image"
                style={{ height: "50%", width: "50%", objectFit: "contain" }}
              />
            </div>
            <div style={{ display: "flex", gap: "20px", paddingTop: "20px" }}>
              <PhotosButton onClick={() => handleDeletePhotos(photo.id)}>
                Delete Photo
              </PhotosButton>
            </div>
          </Photoslists>
        ))}
      </PhotosItems>
    </PhotosContainer>
  );
};

// Export the 'PhotosData' component as the default export of this module.
export default Photos;
