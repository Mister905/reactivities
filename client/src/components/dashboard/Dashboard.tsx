import React from "react";
import IActivity from "../../data/activity/IActivity";
import ActivityList from "../activity_list/ActivityList";
import ActivityDetails from "../activity_details/ActivityDetails";
import ActivityForm from "../activity_form/ActivityForm";
import { useSelector, useDispatch } from "react-redux";
import { IAppState } from "../../store";

interface IProps {
  // activities: IActivity[];
  // handle_activity_selection: (id: string) => void;
  // selected_activity: IActivity | undefined;
  // set_selected_activity: (activity: IActivity | undefined) => void;
  // create_mode: boolean;
  // set_create_mode: (create_mode: boolean) => void;
  // edit_mode: boolean;
  // set_edit_mode: (edit_mode: boolean) => void;
  // handle_create_activity: (activity: IActivity) => void;
  // handle_update_activity: (activity: IActivity) => void;
  // handle_delete_activity: (id: string) => void;
}

const Dashboard: React.FC<IProps> = (
  {
    // activities,
    // handle_activity_selection,
    // selected_activity,
    // set_selected_activity,
    // create_mode,
    // set_create_mode,
    // edit_mode,
    // set_edit_mode,
    // handle_create_activity,
    // handle_update_activity,
    // handle_delete_activity
  }
) => {
  const dispatch = useDispatch();

  const activity = useSelector((state: IAppState) => state.activity);

  return (
    <div className="mt-25">
      <div className="row">
        <div className="col m6">
          <ActivityList
          // activities={activities}
          // handle_activity_selection={handle_activity_selection}
          // handle_delete_activity={handle_delete_activity}
          />
        </div>
        <div className="col m5 offset-m1">
          <div className="row">
            <div className="col m12">
              <h4 className="center-align">Activity Details</h4>
            </div>
          </div>

          <div className="row">
            <div className="col m12">
              <ActivityDetails
              // selected_activity={activity.selected_activity}
              // set_edit_mode={set_edit_mode}
              // set_selected_activity={set_selected_activity}
              />
            </div>
          </div>

          {/* {(create_mode || edit_mode) && (
            <div className="row">
              <div className="col m12">
                <ActivityForm
                  create_mode={create_mode}
                  edit_mode={edit_mode}
                  set_create_mode={set_create_mode}
                  set_edit_mode={set_edit_mode}
                  selected_activity={selected_activity}
                  set_selected_activity={set_selected_activity}
                  handle_create_activity={handle_create_activity}
                  handle_update_activity={handle_update_activity}
                />
              </div>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
