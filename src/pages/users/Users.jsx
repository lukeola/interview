// Import necessary modules and functions from React.
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import spinner from "../../components/animations/loading.json";
import {
  DetailsDiv,
  UserBox,
  UserDetails,
  UserLinks,
  UserPosts,
  UsersContainer,
  UsersHeader,
  UsersItems,
  Usersheader,
  Userslists,
} from "./UsersElements";

// Create a functional component named Users.
const Users = () => {
  // Define state variables 'data' and 'error' using the 'useState' hook.
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Use the 'useEffect' hook to perform side effects in the component.
  useEffect(() => {
    // Define an asynchronous function 'fetchData' to fetch data from an API.
    const fetchData = async () => {
      try {
        // Send an HTTP GET request to the specified URL.
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        // Check if the response is not OK (HTTP status code other than 200).
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        // Parse the response JSON data and set it to the 'data' state.
        const data = await response.json();
        setData(data);
        setIsLoading(false); // Set loading to false when data is fetched.
      } catch (error) {
        // Handle any errors that occur during the fetch and set the 'error' state.
        setError(error);
        setIsLoading(false); // Set loading to false if an error occurs.
      }
    };

    // Invoke the 'fetchData' function when the component mounts (empty dependency array).
    fetchData();
  }, []);

  // If there's an error, render a message displaying the error.
  if (error) {
    return <UsersContainer>Error: {error.message}</UsersContainer>;
  }
  if (isLoading) {
    // Display a loading message or loading spinner while data is being fetched.
    return (
      <UsersContainer>
        <Lottie animationData={spinner} style={{ height: "150px" }} />
      </UsersContainer>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  // Render the fetched data as a list of users if no error occurred.
  return (
    <UsersContainer>
      <UsersHeader>USERS</UsersHeader>
      <UsersItems>
        {data.map((user) => (
          // Render each post with a unique 'key' and its 'title'.
          <UserBox key={user.id}>
            <Userslists>
              <Usersheader>
                <h3> USER ID: {user.id}</h3>{" "}
                <UserLinks>
                  <Link to={`/user/${user.id}/posts`}> POSTS</Link>
                </UserLinks>
                <UserLinks>
                  <Link to={`/user/${user.id}/todos`}> TODOS</Link>
                </UserLinks>
                <UserLinks>
                  <Link to={`/user/${user.id}/albums`}> ALBUMS</Link>
                </UserLinks>
              </Usersheader>
              <DetailsDiv>
                <UserDetails>Full Name: </UserDetails> <p> {user.name}</p>
              </DetailsDiv>
              <DetailsDiv>
                <UserDetails>Username: </UserDetails> <p>{user.username}</p>
              </DetailsDiv>
              <DetailsDiv>
                <UserDetails>Email: </UserDetails> <p>{user.email} </p>
              </DetailsDiv>
              <div>
                <UserDetails>Address: </UserDetails>
                <p>Street: {user.address.street}</p>
                <p>Suite: {user.address.suite}</p>
                <p>City: {user.address.city}</p>
                <p>Zip Code: {user.address.zipcode}</p>
                <div>
                  <UserDetails>Geo Location: </UserDetails>
                  <p>
                    Latitude: {user.address.geo.lat} Longitude:{" "}
                    {user.address.geo.lng}
                  </p>
                </div>
              </div>
              <DetailsDiv>
                <UserDetails>Phone: </UserDetails> <p>{user.phone}</p>
              </DetailsDiv>
              <DetailsDiv>
                <UserDetails>Website: </UserDetails> <p> {user.website}</p>
              </DetailsDiv>
              <div>
                <UserDetails>Company Details:</UserDetails>
                <p> Name: {user.company.name}</p>
                <p>Catch Phrase: {user.company.catchPhrase}</p>
                <p>BS: {user.company.bs}</p>
              </div>
            </Userslists>
          </UserBox>
        ))}
      </UsersItems>
    </UsersContainer>
  );
};

// Export the 'Users' component as the default export of this module.
export default Users;
