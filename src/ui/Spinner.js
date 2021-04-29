import React from "react";
import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <img
      src={spinner}
      style={{ width: "20%", margin: "auto", display: "block" }}
      alt="Loading..."
    />
  );
};

export default Spinner;
