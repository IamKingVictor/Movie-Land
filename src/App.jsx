import React, { useEffect } from "react";
import "./index.css";
import searchIcon from "./search.svg";

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
  const searchMovies = async (titles) => {
    const response = await fetch(`${API_URL}&s=${titles}`);
    const data = await response.json();

    console.log(data.Search);
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
      <div className="container">
        <div className="movie">
          <div>
            <p>{movie1.Year}</p>
          </div>
          <div>
            <img
              src={
                movie1.Poster !== "N/A"
                  ? movie1.Poster
                  : "https://via.placcceholder.com/400"
              }
              alt={movie1.Title}
            />
          </div>
          <div>
            {" "}
            <span>{movie1.Type}</span>
            <h3>{movie1.Title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
