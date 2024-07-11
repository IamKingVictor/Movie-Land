import React, { useEffect, useState } from "react";
import "./index.css";
import searchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=6980e23";

const movie1 = {
  Title: "Batman v Superman: Dawn of Justice (Ultimate Edition)",
  Year: "2016",
  imdbID: "tt18689424",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BOTRlNWQwM2ItNjkyZC00MGI3LThkYjktZmE5N2FlMzcyNTIyXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg",
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const searchMovies = async (titles) => {
    const response = await fetch(`${API_URL}&s=${titles}`);
    const data = await response.json();

    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("Batman");
  }, []);
  return (
    <div className="app">
      <h1>Flix Fix</h1>;
      <div className="search">
        <input
          placeholder="Search for movies"
          value="Batman"
          onChange={() => {}}
        />
        <img src={searchIcon} alt="Search" onClick={() => {}} />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
