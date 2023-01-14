import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";

import "../styles/layout.css";

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  function handleHamburgerChange() {
    return setIsOpen((prev) => !prev);
  }

  function home() {
    navigate("/");
  }

  function hide() {
    return setIsOpen(false);
  }

  return (
    <nav className="nav">
      <div className="layout_heading" onClick={home}>
        <h1 className="heading">Welcome</h1>
      </div>

      <div className="hamburger-box">
        <Hamburger
          size={25}
          color="#fff"
          toggled={isOpen}
          toggle={handleHamburgerChange}
        />
      </div>

      <ul
        className={isOpen ? "navigation-expand" : "navigation"}
        onClick={hide}
      >
        <li className={isOpen ? "nav-el-expand" : ""}>
          <NavLink
            to="/"
            end
            style={({ isActive }) => ({
              color: isActive ? "tomato" : "white",
              textDecoration: "none",
              transition: "color 0.2s ease-in 0.2s",
            })}
          >
            Home
          </NavLink>
        </li>{" "}
        <li className={isOpen ? "nav-el-expand" : ""}>
          <NavLink
            to="about"
            style={({ isActive }) => ({
              color: isActive ? "tomato" : "white",
              textDecoration: "none",
              transition: "color 0.2s ease-in 0.2s",
            })}
          >
            ErrorBoundary
          </NavLink>
        </li>{" "}
        <li className={isOpen ? "nav-el-expand" : ""}>
          <NavLink
            to="repos"
            style={({ isActive }) => ({
              color: isActive ? "tomato" : "white",
              textDecoration: "none",
              transition: "color 0.2s ease-in 0.2s",
            })}
          >
            Repos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
