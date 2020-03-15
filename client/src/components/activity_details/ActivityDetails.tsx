import React from "react";
import { IActivity } from "../../models/activity";
import moment from "moment";

interface IProps {
  selected_activity: IActivity;
  set_edit_mode: (edit_mode: boolean) => void;
  set_selected_activity: (activity: IActivity | undefined) => void;
}

const ActivityDetails: React.FC<IProps> = ({
  selected_activity,
  set_edit_mode,
  set_selected_activity
}) => {
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <img
            src={require(`../../assets/img/${selected_activity.category}.jpg`)}
          />
          <span className="card-title custom-card-title">
            {selected_activity.title}
          </span>
        </div>
        <div className="card-content">
          <div className="row">
            <p>{selected_activity.description}</p>
            <p>{selected_activity.category}</p>
            <p>{moment(selected_activity.date).format("MMMM Do YYYY")}</p>
            <p>{selected_activity.city}</p>
            <p>{selected_activity.venue}</p>
          </div>
          <div className="row">
            <div className="col m10 offset-m1">
              <div className="col m6">
                <button
                  onClick={() => set_edit_mode(true)}
                  className="btn btn-wide"
                >
                  Edit
                </button>
              </div>
              <div className="col m6">
                <button
                  onClick={() => set_selected_activity(undefined)}
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
};

export default ActivityDetails;
