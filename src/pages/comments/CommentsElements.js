import styled from "styled-components";

export const CommentsContainer = styled.div`
  width: 80%;
  margin-left: 10%;
  background-color: rgba(255, 250, 250, 0.7);
  position: relative;
  padding-top: 10rem;
  padding-bottom: 10rem;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const CommentsHeader = styled.h1`
  width: 100%;
  color: black;
  font: 2rem;
  text-align: center;
  padding-bottom: 2rem;
`;

export const CommentsItems = styled.ol`
  position: relative;
`;
export const Commentslists = styled.li`
  background-color: white;
  list-style: none;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
`;
