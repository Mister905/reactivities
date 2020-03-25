import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import IActivity from "../../data/activity/IActivity";
import SVGIcon from "../svg_icon/SVGIcon";

interface IProps {
  activity: IActivity;
}

const ActivityListItem: React.FC<IProps> = ({ activity }) => {
  return (
    <div className="row">
      <div className="col s12 m12 card">
        <div className="card-content">
          <div className="row">
            <div className="col s12 m4">
              <img
                src={require(`../../assets/img/user.png`)}
                alt={`${activity.category}`}
                className="responsive-img circle"
              />
            </div>
            <div className="col s12 m8">
              <div className="row">
                <div className="col m12 s12 center-align">
                  <div className="flex activity-list-item-container">
                    <div className="activity-list-item-child bold-text">
                      {activity.title}
                    </div>
                    <div className="activity-list-item-child flex">
                      <span className="activity-list-item-icon">
                        <SVGIcon icon={"calendar"} />
                      </span>
                      {moment(activity.date).format("MMMM D, YYYY")}
                    </div>

                    <div className="activity-list-item-child flex">
                      <span className="activity-list-item-icon">
                        <SVGIcon icon={"location_pin"} />
                      </span>
                      {activity.city}
                    </div>
                    <div className="activity-list-item-child stretch">
                      <div className="chip custom-chip category-chip bold-text">
                        {activity.category}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col m6 offset-m6 s6 offset-s6 center-align">
                  <Link
                    to={`/activities/${activity.id}`}
                    className="btn btn-custom"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m12 card attendee-list-card z-depth-2">
              <div className="card-content grey-text">
                <p>Attendees</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityListItem;
