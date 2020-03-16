import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { open_create_form } from "../../actions/activity/ActivityActions";
import { IAppState } from "../../store";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();

  const activity = useSelector((state: IAppState) => state.activity);

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
                  onClick={() => dispatch(open_create_form())}
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
