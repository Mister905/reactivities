import React from "react";
import IActivity from "../../data/activity/IActivity";
import ActivityList from "../activity_list/ActivityList";
import ActivityDetails from "../activity_details/ActivityDetails";
import ActivityForm from "../activity_form/ActivityForm";
import { useSelector, useDispatch } from "react-redux";
import { IAppState } from "../../store";

const Dashboard: React.FC = () => {
  return (
    <div className="mt-25">
      <div className="row">
        <div className="col m8 offset-m2 center-align">
          <ActivityList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
