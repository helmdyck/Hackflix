import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {nanoid} from "nanoid"

function Header() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  /*Llamada a la api de peliculas populares */
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
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {movies.map((movie, index) => (
          <div
            className={
              index === 0
                ? "carousel-item home-header-backdrop active"
                : "carousel-item home-header-backdrop"
            }
          >
            <div className="home-action-icons col-9 d-flex align-items-start">
              <h3 className="tagline text-start fst-italic">{movie.title}</h3>
              <div className="ctas">
                <div className="play-div">
                  <button
                    type="button"
                    className="btn btn-light btn-lg"
                    onClick={() => navigate(`/movie/${movie.id}`)}
                  >
                    MORE INFO
                  </button>
                </div>
              </div>
            </div>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              key={movie.id}
              className="d-block w-100"
              alt="..."
            />
          </div>
        ))}
      </div>
      <div className="gradient-shadow-bottom"></div>
      <div className="gradient-shadow-top"></div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Header;
