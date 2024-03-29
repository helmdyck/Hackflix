import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import DiscoverMovScroll from "../components/DiscoverMovScroll";
import Tooltip from "../components/Tooltip";

function MovieDetails() {
  const params = useParams();
  const [movie, setMovie] = useState();
  const [myList, SetMyList] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    const getMovie = async () => {
      try {
        const { data } = await axios({
          method: "get",
          url: `https://api.themoviedb.org/3/movie/${params.id}?api_key=fdb94be49df446ef04d08d060f981cd6`,
        });
        setMovie(data);
      } catch (error) {
        navigate("*");
      }
    };
    getMovie();
  }, [location.pathname]);

  const release_date = movie?.release_date;
  const date = new Date(release_date);
  const year = date.getFullYear();

  const moviePoster = movie?.poster_path;

  const genres = movie?.genres;

  const toggleFave = () => {
    SetMyList(!myList);
  };

  return (
    <>
      {movie && (
        <>
          <div className="container-fluid p-0 backdrop-div">
            <img
              className="movie-backdrop"
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt=""
            />
            <div className="gradient-shadow-bottom"></div>

            <div className="container">
              <div className="poster-container">
                <div className="row">
                  <div className="col-3 movie-poster ">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${moviePoster}`}
                      alt=""
                    />
                  </div>

                  <div className="col-9 action-icons">
                    <h3 className="mov-title">{movie.title}</h3>
                    <div className="ctas">
                      <div className="play-div-mov">
                        <Tooltip text={"No está disponible"}>
                          <button type="button" className="play-movie">
                            <i className="bi bi-play-fill"></i>
                            WATCH NOW
                          </button>
                        </Tooltip>
                        <p className="runtime pt-2">{movie.runtime} Minutes</p>
                      </div>
                      <>
                        <div className="addToFave-icon" onClick={toggleFave}>
                          {myList ? (
                            <i className="bi bi-check2"></i>
                          ) : (
                            <i className="bi bi-plus-circle"></i>
                          )}
                        </div>
                      </>

                      {genres.map((genre) => (
                        <p className="genres" key={genre.id}>
                          {genre.name}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="gradient-shadow-top"></div>
          <div className="container about-movie text-white">
            <div className="row">
              <div className="col">
                <h2 className="tagline">{movie.tagline}</h2>
              </div>
              <div className="col"></div>
            </div>

            <div className="movie-details">
              <p>{year}</p>
              <p>{movie.overview}</p>
            </div>
          </div>
        </>
      )}
      <DiscoverMovScroll />
    </>
  );
}

export default MovieDetails;
