import React from 'react'

const Header = ({
  handleOnSubmit, 
  handleOnChange,
  searchValue
}) => {
  return (
    <header className="header">
      <div className="title">
        <h1>MYmovie</h1>
      </div>
      <div className="search">
        <form onSubmit={handleOnSubmit}>
          <input 
            className="search-input" 
            type="text" 
            name="search" 
            value={searchValue} 
            onChange={handleOnChange}
            placeholder="Search..."/>
        </form>
      </div>
    </header>
  )
}

export default Header
