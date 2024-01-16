import React, { useState, useEffect } from "react";
import axios from "axios";

const favoriteMovies = [
  { id: 767 },
  { id: 194 },
  { id: 4348 },
  { id: 493922 },
  { id: 949423 },
  { id: 157336 },
  { id: 155 },
  { id: 99 },
  { id: 688 },
  { id: 221 },
  { id: 770 },
  { id: 76341 },
];

function MyList() {
  const [movies, setMovies] = useState([]);
  console.log(movies);

  useEffect(() => {
    const getMovies = async () => {
      const { data } = await axios({
        method: "get",
        url: `https://api.themoviedb.org/3/find/${favoriteMovies.id}?api_key=fdb94be49df446ef04d08d060f981cd6`,
      });
      setMovies(data.results);
    };
    getMovies();
  }, []);

  return (
    <>
      <div className="container padding-top">
        <div className="text-white">
          <h1>My List</h1>
          {/* <div className="row gap-2">
            {favoriteMovies.map((movie) => (
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
          </div> */}
        </div>
      </div>
    </>
  );
}

export default MyList;
