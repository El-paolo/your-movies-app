import React from "react";
import { Fragment } from "react";
import Movie from "./Movie";
import Container from 'react-bootstrap/Container';
import '../../assets/styles/components/Movies.scss';
const Movies = ({ movies, doneFetch }) => {
  return (
    <Fragment >

<div className=" container movies-container " >

      {
      movies.map((movie) => {
        const { id, title, description, vote_average, backdrop_path, poster_path  } = movie;
        return (
          <Movie
            key={id}
            id={id}
            title={title}
            description={description}
            rating={vote_average}
            backdrop_path={backdrop_path}
            poster_path={poster_path}
          />
        );
      })
      }

</div>
    </Fragment>
  );
};

export default Movies;
