import React, {useEffect, useState} from 'react';

import Movie from './components/Movie'
import Header from './components/Header'

const FEATURED_API= 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1'

const SEARCH_API= 'https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&query='

function App() {
  const [movies, setMovies]= useState([])
  const [searchValue, setSearchValue]= useState('')

  useEffect( () => {
    getMovies(FEATURED_API)
  }, [])

  const getMovies= API => {
    fetch(API)
    .then(res => res.json())
    .then(data => setMovies(data.results))
  }

  const handleOnSubmit= (event) => {
    event.preventDefault()

    if(searchValue.length > 2){
      getMovies(SEARCH_API + searchValue)
      setSearchValue('')
    }  
  }

  const handleOnChange= event => {
    setSearchValue(event.target.value);
  }

  return (    
    <div>
      <Header 
        handleOnSubmit={handleOnSubmit} 
        handleOnChange={handleOnChange}
        searchValue={searchValue}/>
      <div className="movie-container-center">
        <div className="movie-container">
          {
            movies.length > 0 &&
            movies.map(movie => (<Movie key={movie.id} {...movie}/>))
          }
        </div>
    </div>
    </div>
  );
}

export default App;

