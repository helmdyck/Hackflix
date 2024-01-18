import React from "react";
import { useEffect, useState } from "react";
import StarRating from "./Rating";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const getMovies = async () => {
      const { data } = await axios({
        method: "get",
        url: `https://api.themoviedb.org/3/discover/movie?&include_adult=false&language=en-US&api_key=fdb94be49df446ef04d08d060f981cd6&vote_average.gte=${
          rating * 2
        }`,
      });
      setMovies(data.results);
    };
    getMovies();
  }, [rating]);

  //Estado de la pagina actual
  const [page, setPage] = useState(1);

  const getMoreMovies = async () => {
    const { data } = await axios({
      method: "get",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=fdb94be49df446ef04d08d060f981cd6&vote_average.gte=${
        rating * 2
      }&include_adult=false&language=en-US&page=${page + 1}`,
    });
    setMovies((prev) => [...prev, ...data.results]);
    setPage((prev) => prev + 1);
  };

  return (
    <>
      {/* <StarRating onRatingChange={setRating} /> */}
      <div className="container-fluid mt-5">
        <p className="subtitle mb-3 ps-4">Discover Movies</p>
        <InfiniteScroll
          dataLength={movies.length} // largo actual de movies
          next={getMoreMovies} // llegando al final de la lista llamamos a la nueva función
          hasMore={true} // Este es un prop que indica si hay más datos para cargar
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          } // Se muestra mientras se cargan más datos
        >
          <div className="row gap-2">
            {movies.map((movie) => (
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
        </InfiniteScroll>
      </div>
    </>
  );
}

export default Movies;
