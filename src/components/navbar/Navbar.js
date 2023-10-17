import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Logo from "../../images/logo.png";

const Navbar = () => {
  //************Mobile Responsive View*************/
  const [Mobile, setMobile] = useState(false);

  //***************change nav color when scrolling***************/

  const [color, setColor] = useState(false);
  const changeColor = () => {
    window.scrollY >= 75 ? setColor(true) : setColor(false);
  };

  window.addEventListener("scroll", changeColor);

  //************************************************************ */

  //Scrolls to top o page when you click on a new page link//
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={color ? "header-bg" : "header"}>
      <nav className="navbar">
        <Link to="/" className="logo">
          <img
            src={Logo}
            alt="precision_logo"
            style={{ objectFit: "contain", height: "100%", width: "100%" }}
          />
        </Link>

        <ul
          className={Mobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setMobile(false)}
        >
          <Link to="/" className={color ? "home-bg" : "home"}>
            <li>Home</li>
          </Link>

          <Link to="/posts" className={color ? "posts-bg" : "posts"}>
            <li>Posts</li>
          </Link>

          <Link to="/users" className={color ? "users-bg" : "users"}>
            <li>Users</li>
          </Link>

          <Link to="/comments" className={color ? "comments-bg" : "comments"}>
            <li>Comments</li>
          </Link>
        </ul>
        <button
          className={color ? "mobile-menu-icon-bg" : "mobile-menu-icon"}
          onClick={() => setMobile(!Mobile)}
        >
          {Mobile ? (
            <i className="fas fa-times" />
          ) : (
            <i className="fas fa-bars" />
          )}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
