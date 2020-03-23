import React from "react";
import Logo from "../../assets/img/hero_logo.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="hero-image">
        <div className="hero-content">
          <img src={Logo} alt="" />
          <Link to={"/activities"} className="landing-btn">
            Enter
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
