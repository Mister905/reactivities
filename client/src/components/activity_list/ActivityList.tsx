import React, { useEffect } from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import {
  get_activites,
  set_current_activity
} from "../../actions/activity/ActivityActions";
import { IAppState } from "../../store";

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
                <div className="col m6">
                  <div className="chip">{activity.category}</div>
                </div>
                <div className="col m6">
                  <div className="row">
                    <div className="col m6">
                      <button
                        // onClick={() => handle_delete_activity(activity.id)}
                        className="btn red"
                      >
                        Delete
                      </button>
                    </div>
                    <div className="col m6">
                      <button
                        // onClick={() => handle_activity_selection(activity.id)}
                        onClick={() => dispatch(set_current_activity(activity))}
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
