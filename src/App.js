// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Posts from "./pages/posts/Posts";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Todos from "./pages/todos/Todos";
import Photos from "./pages/photos/Photos";
import Albums from "./pages/albums/Albums";
import Comments from "./pages/comments/Comments";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import UserPosts from "./pages/users/UserPosts";
import PostComments from "./pages/posts/PostComments";
import AlbumPhotos from "./pages/albums/AlbumPhotos";
import UsersTodos from "./pages/users/UserTodos";
import UserAlbums from "./pages/users/UserAlbums";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/users" element={<Users />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/user/:userId/posts" element={<UserPosts />} />
          <Route path="/user/:userId/todos" element={<UsersTodos />} />
          <Route path="/user/:userId/albums" element={<UserAlbums />} />
          <Route path="/posts/:postId/comments" element={<PostComments />} />
          <Route path="/albums/:albumId/photos" element={<AlbumPhotos />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
