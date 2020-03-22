import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/reactivities.png";

const Navbar: React.FC = () => {
  return (
    <div>
      <nav className="custom-nav">
        <div className="container">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo center">
              <img
                src={Logo}
                alt="Logo"
                className="brand-logo-img responsive-img"
              />
            </Link>
            <ul className="left hide-on-med-and-down">
              <li>
                <Link to="/activities" className="bold-text">
                  Activities
                </Link>
              </li>
            </ul>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link to="/activities/create" className="btn btn-custom">
                  Create
                  <i className="material-icons right create-activity-icon">
                    add
                  </i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
