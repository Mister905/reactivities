import React from "react";
import { IActivity } from "../../models/activity";

interface IProps {
  activities: IActivity[];
  handle_activity_selection: (id: string) => void;
  handle_delete_activity: (id: string) => void;
}
const ActivityList: React.FC<IProps> = ({
  activities,
  handle_activity_selection,
  handle_delete_activity
}) => {
  return (
    <div>
      {activities.map(activity => {
        return (
          <div key={activity.id} className="card">
            <div className="card-content">
              <span className="card-title">{activity.title}</span>
              <p>{activity.date}</p>
              <p>{activity.city}</p>
              <p>{activity.venue}</p>
              <div className="row mt-25">
                <div className="col m6">
                  <div className="chip">{activity.category}</div>
                </div>
                <div className="col m6">
                  <div className="row">
                    <div className="col m6">
                      <button
                        onClick={() => handle_delete_activity(activity.id)}
                        className="btn red"
                      >
                        Delete
                      </button>
                    </div>
                    <div className="col m6">
                      <button
                        onClick={() => handle_activity_selection(activity.id)}
                        className="btn btn-custom"
                      >
                        View
                      </button>
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
