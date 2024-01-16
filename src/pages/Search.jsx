import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Search() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const searchMovies = async () => {
      const { data } = await axios({
        method: "get",
        url: `https://api.themoviedb.org/3/search/movie?api_key=fdb94be49df446ef04d08d060f981cd6&query=${query}`,
      });
      setMovies(data.results);
    };
    searchMovies();
  }, [query]);

  const moviesWithPoster = movies?.filter(movie => movie.poster_path !== null)

  return movies ? (
    <>
      <div className="container padding-top">
        <div className="input-group input-group-lg">
          <span className="input-group-text pe-0">
            <i className="bi bi-search page-search-icon"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="¿Qué estás buscando?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="container mt-5 search-results">
        <div className="row gap-2">
          {moviesWithPoster.map((movie) => (
              <div className="col d-flex justify-content-center" key={movie.id}>
                <div className="card">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    className="poster"
                    alt="Poster de la película"
                    onClick={() => navigate(`/movie/${movie.id}`)}
                  />
                  <div className="movie-title text-center">{movie.title}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="container search-input">
        <div className="input-group input-group-lg">
          <h2>No movie found</h2>
        </div>
      </div>
    </>
  );
}

export default Search;
