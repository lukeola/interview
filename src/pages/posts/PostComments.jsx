import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Lottie from "lottie-react";
import spinner from "../../components/animations/loading.json";
import {
  CommentsContainer,
  CommentsHeader,
  CommentsItems,
  Commentslists,
} from "../comments/CommentsElements";

const PostComments = () => {
  const { postId } = useParams();
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/comments?postsId=${postId}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch comments");
        }

        const commentsData = await response.json();
        setComments(commentsData);
        setIsLoading(false);
        console.log(commentsData);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [postId]);

  if (isLoading) {
    return (
      <CommentsContainer>
        <Lottie animationData={spinner} style={{ height: "150px" }} />
      </CommentsContainer>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <CommentsContainer>
      <CommentsHeader>Comments for Post &nbsp; {postId}</CommentsHeader>
      <CommentsItems>
        {comments.map((comment) => (
          <Commentslists key={comment.id}>
            <p>
              <strong>Subject:</strong> {comment.name}
            </p>
            <p>
              <strong>Comment:</strong> {comment.body}{" "}
            </p>
          </Commentslists>
        ))}
      </CommentsItems>
    </CommentsContainer>
  );
};

export default PostComments;
