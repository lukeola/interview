import styled from "styled-components";

export const TodosContainer = styled.div`
  width: 100%;
  background-color: rgba(255, 250, 250, 0.7);
  position: relative;
  padding: 10% 5%;
  display: flex;
  flex-direction: column;
`;

export const TodosHeader = styled.h1`
  color: black;
  font-size: 24px;
  text-align: center;
  padding-top: 6rem;
  padding-bottom: 3rem;

  @media (min-width: 768px) {
    /* Adjust the styles for screens with a minimum width of 768px */

    padding-bottom: 3rem;
  }
`;

export const TodoStatus = styled.div`
  display: column;
  gap: 5%;

  @media (min-width: 768px) {
    /* Adjust the styles for screens with a minimum width of 768px */

    display: flex;
  }
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
