import React, { Fragment} from "react";
import "../../assets/styles/components/SearchBar.scss";

const SearchBar = ( {validateQMovies} ) => {

  
  

  return (
    <Fragment>
      <div className="search-bar-container">
        <input
          
          className="search-bar"
          placeholder="Search Movie..."
          type="text"
          id="q_movie"
          onKeyPress={(e) => validateQMovies(e)}
        
          
        />

        <button  onClick={(e) => validateQMovies(e)} className="search-button" type="submit"  >
          <i className="fa-solid fa-magnifying-glass " id='search-btn'  ></i>
        </button>
      </div>
    </Fragment>
  );
};

export default SearchBar;
