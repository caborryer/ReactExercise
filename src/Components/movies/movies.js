import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Movies() {
  const[movies, setMovies] = useState([]);


  async function fetchApi() {
    try{
      const results = await axios({method:'get', url:'http://my-json-server.typicode.com/alexdr00/mock-data/movies'})
      setMovies(results.data)
    }catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchApi();
  }, [])

  return(
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 p-5 row">
          {movies.map(movie=> (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="card">
                <img src={movie.cover} alt="movies" className="card-img-top" />
                <div className="card-body">
                  <p className="card-text"> Title: {movie.title} </p>
                  <p className="card-text">Gender: {movie.genre}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

}

export default Movies;