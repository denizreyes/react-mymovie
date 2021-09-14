import React from 'react'

import './Header.scss';

const Header = ({
  handleSubmit, 
  handleChange,
  searchValue
}) => {
  return (
    <header className="header">
      <div className="title">
        <h1>MYmovie</h1>
      </div>
      <div className="search">
        <form onSubmit={handleSubmit}>
          <input 
            className="search_input" 
            type="text" 
            name="search" 
            value={searchValue} 
            onChange={handleChange}
            placeholder="Search..."/>
        </form>
      </div>
    </header>
  )
}

export default Header
