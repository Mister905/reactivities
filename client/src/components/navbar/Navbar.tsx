import React from "react";
import logo from "../../assets/img/logo.png";

interface IProps {
  // handle_open_create_form: () => void;
}

const Navbar: React.FC<IProps> = () =>
  // { handle_open_create_form }
  {
    return (
      <div>
        <nav className="custom-nav">
          <div className="container">
            <div className="nav-wrapper">
              <a href="#" className="brand-logo center">
                Reactivities
              </a>
              <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li>
                  <a className="bold-text" href="sass.html">
                    Activities
                  </a>
                </li>
                <li>
                  <a
                    // onClick={handle_open_create_form}
                    className="btn btn-custom"
                  >
                    Create Activity{" "}
                    <i className="material-icons right create-activity-icon">
                      add
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  };

export default Navbar;
