import React from "react";
import "./homepage.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="left">
        <h1>Curious Cat</h1>
        <h2>Lorem ipsum dolor sit amet Fugiat, maiores.</h2>
        <h3>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
          itaque doloremque quo voluptatum! Dolorum tenetur adipisci sint
          tempore tempora itaque aliquid. Ex explicabo veritatis praesentium
          sequi quae, exercitationem consequuntur.
        </h3>
        <Link to={"/dashboard"} className="button">
          Get started
        </Link>
      </div>
      <div className="right">
        <img src="./curioscat.png" alt="curios-cat" />
      </div>
      
    </div>
  );
};

export default Homepage;
