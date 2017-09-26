import React from "react";
import Navbar from "./navbar/Navbar";
import "./Jumbotron.css";

const Jumbotron = () => (
  <div className="jumbotron">
    <Navbar/>

    <h1 className="text-center">Improve Your Skills!</h1>
    <p className="text-center">
      Submit your VOD today <br/>
      and receive Diamond level review and analysis.
    </p>

  </div>
);

export default Jumbotron;

