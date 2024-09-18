import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const Omdb = () => {
    const [movies, setMovies] = useState([]);

    const getApiCall = async () => {
        const url = "http://www.omdbapi.com/"
        const res = await axios.get(url, {
            params: {
                "apikey": "77fa2330",
                "s": "avengers"
            }
        })
        console.log(res.data)
        setMovies(res.data.Search)
    }

    const getImdbData = async (id) => {
        const url = "http://www.omdbapi.com"

        const res = await axios.get(url, {
            params: {
                "apikey": "77fa2330",
                "i": id
            }
        })
        console.log(res.data)
    }
    useEffect(() => {
        getApiCall();
    }, []); 

    // Styles
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
           
          
        },
        button: {
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            margin: '20px 0'

        },
        movieList: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            
        },
        movieCard: {
            margin: '50px',
            padding: '30px',
            border: '1px solid red',
            borderRadius: '10px',
            width: '300px',
            textAlign: 'center',
            backgroundColor: 'skyblue',
            
        },
        movieTitle: {
            fontSize: '18px',
            fontWeight: 'bold',
            marginTop: '10px',
            
        },
        poster: {
            width: '100%',
            height: '300px',
            objectFit: 'cover',
            cursor: 'pointer',
            backgroundColor: 'gray',
        }
    };

    return (
        <div style={styles.container}>
            {/* <button style={styles.button} onClick={() => { getApiCall() }}>Get Data</button> */}
            <div style={styles.movieList}>
                {
                    movies && movies.length > 0 && (
                        movies.map((movie, index) => (
                            <div key={index} style={styles.movieCard}>
                                <img
                                    src={movie?.Poster}
                                    alt={movie?.Title}
                                    style={styles.poster}
                                    onClick={() => getImdbData(movie?.imdbID)}
                                />
                                <div style={styles.movieTitle}>Title: {movie?.Title}</div>
                                <div>IMDB ID: {movie?.imdbID}
                                <Link to={`/omdb/omdbdetail/${movie?.imdbID}`}>view details</Link>
                                </div>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    )
}
