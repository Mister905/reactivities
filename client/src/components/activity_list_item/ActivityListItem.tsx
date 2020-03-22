import React from "react";
import Modal from "../modal/Modal";
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
      <div className="col m12 card">
        <div className="card-content">
          <div className="row">
            <div className="col m12 s12">
              <img
                src={require(`../../assets/img/${activity.category}.jpg`)}
                alt={`${activity.category}`}
                className="responsive-img"
              />
            </div>
            <div className="col m12 s12">
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
                      <div className="chip custom-chip category-chip">
                        {activity.category}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col m6 s6 center-align">
                  <Modal activity={activity} />
                </div>
                <div className="col m6 s6 center-align">
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
        </div>
      </div>
    </div>
  );
};

export default ActivityListItem;
