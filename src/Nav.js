import React, { useContext } from "react";
import "./Nav.css";
import { MovieContext } from "./MovieContext";

export default Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      <nav className="nav">
        <h1>Context</h1>
        <h3>Number of Movie {movies.length}</h3>
      </nav>
    </div>
  );
};
