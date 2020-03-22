import React, { Fragment } from "react";

import { useSelector } from "react-redux";
import { IAppState } from "../../store";
import ActivityListItem from "../activity_list_item/ActivityListItem";
import moment from "moment";

const ActivityList: React.FC = () => {
  const activities = useSelector(
    (state: IAppState) => state.activity.activities
  );

  // Group Activities by Date
  var activity_map: { [key: string]: any[] } = {};

  for (let i = 0; i < activities.length; i++) {
    const date = moment(activities[i].date).format("MM-DD-YYYY");

    if (!activity_map[date]) {
      activity_map[date] = [activities[i]];
    } else {
      activity_map[date].push(activities[i]);
    }
  }

  return (
    <div>
      {Object.keys(activity_map).map(key => (
        <Fragment key={key}>
          <div className="chip custom-chip date-chip">{moment(key).format("MMMM D, YYYY")}</div>
          <Fragment>
            {activity_map[key].map(activity => {
              return <ActivityListItem key={activity.id} activity={activity} />;
            })}
            <div className="divider custom-divider"></div>
          </Fragment>
        </Fragment>
      ))}
    </div>
  );
};

export default ActivityList;
