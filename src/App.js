// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Posts from "./pages/posts/Posts";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Comments from "./pages/comments/Comments";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
