import React from 'react'

import CardMovie from '../../components/CardMovie';
import './Home.scss';

const Home = ({movies}) => {
  return (
    <main>
      <div className="home">
        {
          (movies && movies.length) ? movies.map(movie => <CardMovie key={movie.id} {...movie} />) : null
        }
      </div>
    </main>
  )
}

export default Home
