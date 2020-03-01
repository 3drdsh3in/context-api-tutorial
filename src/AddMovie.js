import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieListContext';

const AddMovie = () => {

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [movie, setMovies] = useContext(MovieContext);

  const updateName = (e) => {
    setName(e.target.value);
  }
  const updatePrice = (e) => {
    setPrice(e.target.value);
  }
  const addMovie = e => {
    // Prevent other actions
    e.preventDefault();
    setMovies(prevMovies => [...prevMovies, { name: name, price: price }]);
  }
  return (
    <form onSubmit={addMovie}>
      <input type="text" name="name" value={name} onChange={updateName} />
      <input type="text" name="price" value={price} onChange={updatePrice} />
      <button>Submit</button>
    </form>
  );
}

export default AddMovie;

// Upside of context API:
// Really good for rendering out information.

// Downside of context API:
// using anything with 'setMovies' will cause ALL OF THE 
// components that use the same context will re-render!