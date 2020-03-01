import React, { useContext } from 'react';
import { MovieContext } from './MovieListContext';
import './Nav.scss';


const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div className="Nav">
      <h3>Edward</h3>
      <p>List of Movies: {movies.length}</p>
    </div>
  );
}

export default Nav;