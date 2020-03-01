import React, { useContext } from 'react';
import Movie from './Movie';
import { MovieContext } from './MovieListContext';

const MovieList = () => {
  // Consume the MovieContext Data
  const [movies, setMovies] = useContext(MovieContext);
  console.log(movies)
  return (
    <div>
      {/* Paste Movie Context data in: */}
      {
        movies.map(movie => (
          <Movie name={movie.name} price={movie.price} key={movie.id} />
        ))
      }
    </div>
  );
}

export default MovieList;