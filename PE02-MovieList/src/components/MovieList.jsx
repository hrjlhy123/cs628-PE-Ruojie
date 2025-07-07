import React, { useState } from "react";
import "./MovieList.css";

const MovieList = () => {
  const movies = [
    { title: "Inception", genre: "Sci-Fi", releaseYear: 2010 },
    { title: "Titanic", genre: "Romance", releaseYear: 1997 },
    { title: "The Dark Knight", genre: "Action", releaseYear: 2008 },
    { title: "Interstellar", genre: "Sci-Fi", releaseYear: 2014 },
    { title: "La La Land", genre: "Musical", releaseYear: 2016 },
  ];

  const [selectedGenre, setSelectedGenre] = useState("All Genres");

  const genres = [
    `All Genres`,
    ...new Set(movies.map((movie) => movie.genre)),
  ];

  const filteredMovies =
    selectedGenre == `All Genres`
      ? movies
      : movies.filter((movie) => movie.genre == selectedGenre);

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  const handleMovieClick = (title) => {
    alert(`You cliecked on: ${title}`);
  };

  return (
    <div className="movie-list">
      <h2>Movie List</h2>
      <select value={selectedGenre} onChange={handleGenreChange}>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
      <ul>
        {filteredMovies.map((movie) => (
          <li
            key={movie.title}
            onClick={() => handleMovieClick(movie.title)}
            className="movie-card"
          >
            <h3>{movie.title}</h3>
            <p>Genre: {movie.genre}</p>
            <p>Release Year: {movie.releaseYear}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
