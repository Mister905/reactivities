import React from "react";
import IActivity from "../../data/activity/IActivity";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { IAppState } from "../../store";

const ActivityDetails: React.FC = () => {

  const dispatch = useDispatch();

  const activity = useSelector((state: IAppState) => state.activity);

  if (activity.selected_activity && !activity.edit_mode) {
    return (
      <div>
        <div className="card">
          <div className="card-image">
            <img
              src={require(`../../assets/img/${activity.selected_activity.category}.jpg`)}
            />
            <span className="card-title custom-card-title">
              {activity.selected_activity.title}
            </span>
          </div>
          <div className="card-content">
            <div className="row">
              <p>{activity.selected_activity.description}</p>
              <p>{activity.selected_activity.category}</p>
              <p>
                {moment(activity.selected_activity.date).format("MMMM Do YYYY")}
              </p>
              <p>{activity.selected_activity.city}</p>
              <p>{activity.selected_activity.venue}</p>
            </div>
            <div className="row">
              <div className="col m10 offset-m1">
                <div className="col m6">
                  <button
                    // onClick={() => set_edit_mode(true)}
                    className="btn btn-wide"
                  >
                    Edit
                  </button>
                </div>
                <div className="col m6">
                  <button
                    // onClick={() => set_selected_activity(undefined)}
                    className="btn btn-wide"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default ActivityDetails;
