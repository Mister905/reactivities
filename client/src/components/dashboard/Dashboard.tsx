import React from "react";
import ActivityList from "../activity_list/ActivityList";

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
