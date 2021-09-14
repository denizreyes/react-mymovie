import React from 'react'

import api from '../api/api';
import './CardMovie.scss';

const CardMovie = ({title, poster_path, overview, vote_average}) => {
  const setVoteClass= vote => {
    if(vote >= 8){
      return 'green'
    }
    else if(vote >= 6){
      return 'orange'
    }
    else {
      return 'red'
    }
  }

  return (
    <div className="cardmovie">
      <img src={poster_path ? (api.IMG_API + poster_path) : api.DEFUALT_IMG} alt={title}/>
      <div className="info">
        <h3>{title}</h3>
        <span className={`tag ${setVoteClass(vote_average)}`}>
          {vote_average}
        </span>
      </div>
      <div className="over">
        <h2>Overview</h2>
        <p>
          {overview}
        </p>
      </div>
    </div>
  )
}

export default CardMovie
