import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

export const OmdbDetail = () => {

  const imdbID = useParams().id;
  const navigate = useNavigate();
  const [movie, setMovies] = useState();

  const fetchMovie = async (id) => {
    const url = "http://www.omdbapi.com/";
    const res = await axios.get(url, {
      params: {
        "apikey": "77fa2330",
        "i": id
      }
    });
    setMovies(res.data);
  };

  useEffect(() => {
    if (imdbID) {
      fetchMovie(imdbID);
    }
  }, [imdbID]);

  // Inline CSS styles as an object
  const styles = {
    container: {
      textAlign: 'center',
      marginTop: '20px',
      fontFamily: 'Arial, sans-serif',
      color: '#333',

    },
    title: {
      fontSize: '2.5rem',
      color: '#1a73e8',
    },
    poster: {
      width: '350px',
      height: '500px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    info: {
      fontSize: '1.2rem',
      margin: '10px 0',
    },
    strong: {
      color: '#1a73e8',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{movie?.Title}</h1>
      <img style={styles.poster} src={movie?.Poster} alt={movie?.Title} />
      <p style={styles.info}><strong style={styles.strong}>Year:</strong> {movie?.Year}</p>
      <p style={styles.info}><strong style={styles.strong}>Director:</strong> {movie?.Director}</p>
      <p style={styles.info}><strong style={styles.strong}>IMDB Rating:</strong> {movie?.imdbRating}</p>
    </div>
  );
};
