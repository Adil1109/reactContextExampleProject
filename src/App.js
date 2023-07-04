import React from "react";
import "./styles.css";
import Nav from "./Nav";
import MovieList from "./MovieList";
import { MovieProvider } from "./MovieContext";
import AddMovie from "./AddMovie";

export default App = () => {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
};
