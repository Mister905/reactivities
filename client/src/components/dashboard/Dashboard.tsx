import React from "react";
import IActivity from "../../data/activity/IActivity";
import ActivityList from "../activity_list/ActivityList";
import ActivityDetails from "../activity_details/ActivityDetails";
import ActivityForm from "../activity_form/ActivityForm";
import { useSelector, useDispatch } from "react-redux";
import { IAppState } from "../../store";

const Dashboard: React.FC = () => {
  
  const dispatch = useDispatch();

  const activity = useSelector((state: IAppState) => state.activity);

  return (
    <div className="mt-25">
      <div className="row">
        <div className="col m6">
          <ActivityList />
        </div>
        <div className="col m5 offset-m1">
          <div className="row">
            <div className="col m12">
              <h4 className="center-align">Activity Details</h4>
            </div>
          </div>

          <div className="row">
            <div className="col m12">
              <ActivityDetails />
            </div>
          </div>

          {(activity.create_mode || activity.edit_mode) && (
            <div className="row">
              <div className="col m12">
                <ActivityForm />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
