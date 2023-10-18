import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  AlbumsButton,
  AlbumsHeader,
  AlbumsTitle,
  Albumslists,
  AlbumsContainer,
} from "../albums/AlbumElements";

const UserAlbums = () => {
  const { userId } = useParams();
  const [userAlbums, setUserAlbums] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch user Albums");
        }

        const userAlbumsData = await response.json();
        setUserAlbums(userAlbumsData);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  if (isLoading) {
    return <p>Loading user Albums...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  const handleDeleteAlbum = (albumId) => {
    // Create a new array of Albums excluding the Album with the given ID.
    const updatedData = userAlbums.filter((album) => album.id !== albumId);
    setUserAlbums(updatedData);
  };

  return (
    <AlbumsContainer>
      <AlbumsHeader>ALL ALBUMS BY USER &nbsp; {userId}</AlbumsHeader>
      <ul>
        {userAlbums.map((album) => (
          <Albumslists key={album.id}>
            <p>Create by USER ID: {album.userId}</p>
            <AlbumsTitle>{album.title}</AlbumsTitle>
            <p>{album.body}</p>
            <AlbumsButton onClick={() => handleDeleteAlbum(album.id)}>
              Delete Album
            </AlbumsButton>
          </Albumslists>
        ))}
      </ul>
    </AlbumsContainer>
  );
};

export default UserAlbums;
