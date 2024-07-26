import React from "react";
import "./homepage.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homepage">
      <Link to={"/dashboard"} className="dashboard">
        Dashboard
      </Link>
    </div>
  );
};

export default Homepage;