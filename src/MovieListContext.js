// The Movie Provider

import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "$10",
      id: "23124",
    },
    {
      name: "Game of thrones",
      price: "$10",
      id: "2566124",
    },
    {
      name: "Inception",
      price: "$10",
      id: "23524",
    }
  ]);
  return (
    // Note: 'value' is the key that must be used to send information to any imported child
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};