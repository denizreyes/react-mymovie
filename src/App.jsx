import React, {useEffect, useState} from 'react';
import axios from 'axios';
import "@fontsource/poppins";

import Header from './components/Header'
import Home from './pages/Home/Home';
import api from './api/api';

import './assets/css/base.scss';

const App= () => {
  const [movies, setMovies]= useState([]);
  const [searchValue, setSearchValue]= useState('');

  const getMovies= async url => {
    const res= await axios.get(url);
    setMovies(res.data.results);
  }
  const handleSubmit= event => {
    event.preventDefault();
    if(searchValue && searchValue.length > 2){
      getMovies(api.SEARCH_API + searchValue);
      setSearchValue('');
    }
  }

  const handleChange= event => {
    setSearchValue(event.target.value);
  }

  useEffect(() => {
    getMovies(api.FEATURED_API);
  }, [])

  return (    
    <>
      <Header 
        handleSubmit={handleSubmit} 
        handleChange={handleChange}
        searchValue={searchValue}/>
      <Home movies={movies} />
    </>
  );
}

export default App;

