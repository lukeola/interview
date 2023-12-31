import styled from "styled-components";

export const UsersContainer = styled.div`
  width: 100%;
  background-color: rgba(255, 250, 250, 0.7);
  position: relative;
  padding-top: 10rem;
  padding-bottom: 10rem;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const UsersHeader = styled.h1`
  width: 50%;
  color: black;
  font: 2rem;
  text-align: center;
`;
export const UserBox = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
`;
export const Usersheader = styled.div`
  display: flex;
  border: 1px solid;
  background: linear-gradient(135deg, #0074e4, #00a7e1);
  color: #fff;
  padding: 20px;
  justify-content: space-between;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const DetailsDiv = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 8px;
`;
export const UserDetails = styled.p`
  font-size: 18px;
  font-weight: 600;
`;
export const UsersItems = styled.ol`
  position: relative;
  list-style: none;
`;
export const Userslists = styled.li`
  position: relative;
`;

export const UserLinks = styled.div`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;
