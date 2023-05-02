import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/agriculture">Agriculture</Link>
        </li>
        <li>
          <Link to="/technology-pmfc-info">Technology PMFC Info</Link>
        </li>
        <li>
          <Link to="/sustainability-greenhouse">Sustainability Greenhouse</Link>
        </li>
        <li>
          <Link to="/sustainability-mushroom">Sustainability Mushroom</Link>
        </li>
      </ul>
    </nav>
  );
};
