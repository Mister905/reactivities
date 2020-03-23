import React from "react";
import ActivityList from "../activity_list/ActivityList";

const Dashboard: React.FC = () => {
  return (
    <div className="container">
      <div className="mt-25">
        <div className="row">
          <div className="col m6">
            <ActivityList />
          </div>
          <div className="col m6">
            <h4 className="activity-filters-heading">Activity Filters</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
