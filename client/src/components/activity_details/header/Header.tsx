import React from "react";
import IActivity from "../../../data/activity/IActivity";
import moment from "moment";

interface IProps {
  activity: IActivity;
}

const Header: React.FC<IProps> = ({ activity }) => {
  return (
    <div>
      <div className="row mb-0">
        <div className="col card m12">
          <div className="row">
            <div className="card activity-detail-card">
              <div className="card-image">
                <img
                  src={require("../../../assets/img/placeholder.png")}
                  className="responsive-img"
                />
                <span className="card-title">{activity.title}</span>
              </div>
            </div>
          </div>
          <div className="row mb-0">
            <div className="col m12">
              <p>{moment(activity.date).format("MMMM D, YYYY")}</p>
              <p className="mb-20">
                Hosted by <span className="bold-text">Bob</span>
              </p>
              <div className="card-action">
                <div className="row row-mb-0">
                  <div className="col s12 m3 center-align activity-details-header-col">
                    <a className="btn btn-custom activity-details-header-btn btn-wide">
                      Join
                    </a>
                  </div>
                  <div className="col s12 m6 center-align activity-details-header-col">
                    <a className="btn btn-custom activity-details-header-btn btn-wide">
                      Cancel Attendance
                    </a>
                  </div>
                  <div className="col s12 m3 center-align activity-details-header-col">
                    <a className="btn btn-custom activity-details-header-btn btn-wide">
                      Manage
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
