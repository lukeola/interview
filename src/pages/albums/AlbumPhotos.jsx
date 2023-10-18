import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Lottie from "lottie-react";
import spinner from "../../components/animations/loading.json";
import {
  PhotosButton,
  PhotosContainer,
  PhotosHeader,
  PhotosItems,
  PhotosTitle,
  Photoslists,
} from "../photos/PhotosElements";

const AlbumPhotos = () => {
  const { albumId } = useParams();
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/Photos?postsId=${albumId}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch Photos");
        }

        const PhotosData = await response.json();
        setPhotos(PhotosData);
        setIsLoading(false);
        console.log(PhotosData);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [albumId]);

  if (isLoading) {
    return (
      <PhotosContainer>
        <Lottie animationData={spinner} style={{ height: "150px" }} />
      </PhotosContainer>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const handleDeletePhotos = (photoId) => {
    // Create a new array of posts excluding the post with the given ID.
    const updatedData = photos.filter((photo) => photo.id !== photoId);
    setPhotos(updatedData);
  };

  return (
    <PhotosContainer>
      <PhotosHeader>ALBUM &nbsp; {albumId} &nbsp; PHOTOS</PhotosHeader>
      <PhotosItems>
        {photos.map((photo) => (
          // Render each Photos with a unique 'key' and its 'title'.
          <Photoslists key={photo.id}>
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

export default AlbumPhotos;
