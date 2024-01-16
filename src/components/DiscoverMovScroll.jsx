import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DiscoverMovScroll() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getMovies = async () => {
      const { data } = await axios({
        method: "get",
        url: `https://api.themoviedb.org/3/movie/popular?&include_adult=false&language=en-US&api_key=fdb94be49df446ef04d08d060f981cd6`,
      });
      setMovies(data.results);
    };
    getMovies();
  }, []);

  return (
    <>
      <div className="container">
        <p className="subtitle mb-2 mt-4">Top Rated Movies</p>
      </div>
      <div className="container-fluid horizontal-scroll mt-2">
        <div className="row">
          {movies.map((movie) => (
            <div
              className="col justify-content-start m-3"
              key={movie.id}
              
            >
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
  );
}

export default DiscoverMovScroll;
