import React from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { IAppState } from "../../store";
import Modal from "../modal/Modal";
import { Link } from "react-router-dom";

const ActivityList: React.FC = () => {
  
  const dispatch = useDispatch();

  const activities = useSelector(
    (state: IAppState) => state.activity.activities
  );

  return (
    <div>
      {activities.map(activity => {
        return (
          <div key={activity.id} className="card">
            <div className="card-content">
              <span className="card-title">{activity.title}</span>
              <p>{moment(activity.date).format("MMMM Do YYYY")}</p>
              <p>{activity.city}</p>
              <p>{activity.venue}</p>
              <div className="row mt-25">
                <div className="col m6 offset-m3">
                  <div className="row">
                    <div className="col m6">
                      <div className="chip">{activity.category}</div>
                    </div>
                    <div className="col m6">
                      <div className="row">
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
        );
      })}
    </div>
  );
};

export default ActivityList;
