import React from "react";
import Pooh from "../../assets/img/pooh.jpg";

const NotFound = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col m12 center-align">
          <h1>Oh Bother!</h1>
        </div>
      </div>
      <div className="row">
        <div className="col m6 offset-m3">
          <img src={Pooh} alt="Profile Image" className="responsive-img" />
        </div>
      </div>
      <div className="row">
        <div className="col m12 center-align">
          <h4>We couldn't find what you're looking for.</h4>
          <p className="bold-text">Sorry about that.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
