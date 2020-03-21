import React from "react";
import Modal from "../modal/Modal";
import { Link } from "react-router-dom";
import moment from "moment";
import IActivity from "../../data/activity/IActivity";

interface IProps {
  activity: IActivity;
}

const ActivityListItem: React.FC<IProps> = ({ activity }) => {
  return (
    <div>
      <div key={activity.id} className="card">
        <div className="card-content center-align">
          <span className="card-title">{activity.title}</span>
          <p>{moment(activity.date).format("MMMM D, YYYY")}</p>
          <p>{activity.city}</p>
          <p>{activity.venue}</p>
          <div className="row mt-25 mb-0">
            <div className="col m10 offset-m1">
              <div className="row mb-0">
                <div className="col m6">
                  <div className="chip custom-chip">{activity.category}</div>
                </div>
                <div className="col m6">
                  <div className="row mb-0">
                    <div className="col m6">
                      <Modal activity={activity} />
                    </div>
                    <div className="col m6">
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
      </div>
    </div>
  );
};

export default ActivityListItem;
