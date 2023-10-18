import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 250, 0.7);
  position: relative;
  height: 80vh;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const HomeHeader = styled.h1`
  width: 80%; /* Set the width to 100% to make it responsive */
  color: black;
  font-size: 18px;
  text-align: center;

  @media (min-width: 768px) {
    /* Adjust the styles for screens with a minimum width of 768px */
    font-size: 36px; /* Increase the font size for larger screens */
    width: 50%;
  }
`;

export const HomeIntro = styled.div`
  width: 80%;
  margin-top: 2rem;
  text-align: center;

  @media (min-width: 768px) {
    width: 50%;
  }
`;
