import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "../../assets/styles/components/Loader.scss";
import { Fragment } from "react";
const Loader = () => {
  return (
    <Fragment>
      <span>Loading...</span>
      <Spinner  variant="info" animation="border" role="status" />
    </Fragment>
  );
};

export default Loader;
