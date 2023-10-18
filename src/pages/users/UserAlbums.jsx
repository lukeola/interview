import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import spinner from "../../components/animations/loading.json";
import {
  AlbumsButton,
  AlbumsHeader,
  AlbumsTitle,
  Albumslists,
  AlbumsContainer,
  AlbumsItems,
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
    return (
      <AlbumsContainer>
        <Lottie animationData={spinner} style={{ height: "150px" }} />
      </AlbumsContainer>
    );
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
      <AlbumsItems>
        {userAlbums.map((albums) => (
          // Render each Albums with a unique 'key' and its 'title'.
          <Albumslists key={albums.id}>
            <p>Create by USER ID: {albums.userId}</p>
            <AlbumsTitle>{albums.title}</AlbumsTitle>
            <div style={{ display: "flex", gap: "20px", paddingTop: "20px" }}>
              <AlbumsButton onClick={() => handleDeleteAlbum(albums.id)}>
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

export default UserAlbums;
