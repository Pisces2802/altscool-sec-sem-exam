import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/layout.css";

export default function Layout() {
  return (
    <nav className="nav">
      <h1 className="layout_heading">Welcome</h1>

      <div className="navigation">
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
        </NavLink>{" "}
        <NavLink
          to="about"
          style={({ isActive }) => ({
            color: isActive ? "tomato" : "white",
            textDecoration: "none",
            transition: "color 0.2s ease-in 0.2s",
          })}
        >
          ErrorBoundary
        </NavLink>{" "}
        <NavLink
          to="repos"
          style={({ isActive }) => ({
            color: isActive ? "tomato" : "white",
            textDecoration: "none",
            transition: "color 0.2s ease-in 0.2s",
            marginBottom: "10px",
          })}
        >
          Repos
        </NavLink>
      </div>
    </nav>
  );
}
