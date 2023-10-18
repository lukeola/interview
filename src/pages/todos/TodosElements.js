import styled from "styled-components";

export const TodosContainer = styled.div`
  width: 100%;
  background-color: rgba(255, 250, 250, 0.7);
  position: relative;
  padding-top: 10rem;
  padding: 10rem 5rem;
  display: flex;
  flex-direction: column;
`;

export const TodosHeader = styled.h1`
  color: black;
  font: 2rem;
  text-align: center;
  padding-bottom: 3rem;
`;

export const TodosItems = styled.ol`
  position: relative;
`;
export const Todoslists = styled.li`
  background-color: #f5f5f5;
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

export const TodosTitle = styled.div`
  font-weight: 600;
  font-size: 20px;
`;
export const TodosButton = styled.button`
  padding: 5px;

  &:hover {
    transform: scale(1.05);
  }
`;
