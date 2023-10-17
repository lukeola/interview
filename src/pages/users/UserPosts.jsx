import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  PostButton,
  PostHeader,
  PostTitle,
  Postlists,
  PostsContainer,
} from "../posts/PostsElements";

const UserPosts = () => {
  const { userId } = useParams();
  const [userPosts, setUserPosts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch user posts");
        }

        const userPostsData = await response.json();
        setUserPosts(userPostsData);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  if (isLoading) {
    return <p>Loading user posts...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  const handleDeletePost = (postId) => {
    // Create a new array of posts excluding the post with the given ID.
    const updatedData = userPosts.filter((post) => post.id !== postId);
    setUserPosts(updatedData);
  };

  return (
    <PostsContainer>
      <PostHeader>ALL POSTS BY USIER ID: {userId}</PostHeader>
      <ul>
        {userPosts.map((post) => (
          <Postlists key={post.id}>
            <p>Create by USER ID: {post.userId}</p>
            <PostTitle>{post.title}</PostTitle>
            <p>{post.body}</p>
            <PostButton onClick={() => handleDeletePost(post.id)}>
              Delete Post
            </PostButton>
          </Postlists>
        ))}
      </ul>
    </PostsContainer>
  );
};

export default UserPosts;
