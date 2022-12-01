import React, { Fragment, useContext } from "react";
import SearchBar from "../Common/SearchBar";
import { HomeContext } from "../../Contexts/HomeContext";
import Movies from "../Common/Movies";
import Message from "../Common/Message";
import Loader from "../Common/Loader";

const Home = () => {
  const { validateQMovies, doneFetch, text, movies } = useContext(HomeContext);

  return (
    <Fragment>
      <SearchBar validateQMovies={validateQMovies} />

      {doneFetch ? (
        movies.length ? (
          <Movies movies={movies} />
          
        ) : (
          <Message text={text} />
        )
      ) : (
        <Loader />
      )}
    </Fragment>
  );
};

export default Home;
