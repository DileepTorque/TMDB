import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import YouTube from 'react-youtube';
import './SIngleMovie.css'; 

const SIngleMovie = () => {
  const location = useLocation();
  const SpecificMovie = location.state.m;
  const [Trailers, setTrailers] = useState();

  async function getTrailer(id) {
    fetch(`http://api.themoviedb.org/3/movie/${id}/videos?api_key=4baaa8b049d342c77c58c5d923f99487`)
      .then((c) => c.json())
      .then((e) => setTrailers(e.results[0].key));
  }

  return (
    <section className="movie-container">
      <div className="movie-details">
        <h1 className="movie-title">Welcome to the movie page of {SpecificMovie.title}</h1>
        <img
          className="movie-backdrop"
          src={`https://image.tmdb.org/t/p/original/${SpecificMovie.backdrop_path}`}
          alt={`${SpecificMovie.title} Backdrop`}
        />
        <h2 className="movie-title-main">{SpecificMovie.title}</h2>
        <p className="movie-overview">{SpecificMovie.overview}</p>
        <h3 className="movie-rating">Rating: {SpecificMovie.vote_average}/10</h3>
        <button className="trailer-button" onClick={() => getTrailer(SpecificMovie.id)}>
          Play Trailer
        </button>
      </div>
      <div className="trailer-container">
        {Trailers && <YouTube videoId={Trailers} />}
      </div>
    </section>
  );
};

export default SIngleMovie;
