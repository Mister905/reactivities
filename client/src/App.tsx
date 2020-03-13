import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import axios from "axios";
import { IActivity } from "./models/activity";

const App = () => {
  const [activities, set_activities] = useState<IActivity[]>([]);

  const [selected_activity, set_selected_activity] = useState<
    IActivity | undefined
  >(undefined);

  const [create_mode, set_create_mode] = useState(false);

  const [edit_mode, set_edit_mode] = useState(false);

  const handle_activity_selection = (id: string) => {
    set_selected_activity(activities.find(activity => activity.id === id));
    set_edit_mode(false);
    set_create_mode(false);
  };

  const handle_open_create_form = () => {
    set_selected_activity(undefined);
    set_edit_mode(false);
    set_create_mode(true);
  };

  const handle_create_activity = (activity: IActivity) => {
    set_activities([...activities, activity]);
  };

  const handle_update_activity = (activity: IActivity) => {
    set_activities([...activities.filter(a => a.id !== activity.id), activity]);
  };

  const handle_delete_activity = (id: string) => {
    set_activities([...activities.filter(a => a.id !== id)]);
  };

  useEffect(() => {
    const fetch_data = async () => {
      const response = await axios.get<IActivity[]>(
        "http://localhost:5000/api/activities"
      );

      set_activities(response.data);
    };

    fetch_data();
  }, []);

  return (
    <div>
      <Navbar handle_open_create_form={handle_open_create_form} />
      <div className="container">
        <Dashboard
          activities={activities}
          handle_activity_selection={handle_activity_selection}
          selected_activity={selected_activity}
          set_selected_activity={set_selected_activity}
          create_mode={create_mode}
          set_create_mode={set_create_mode}
          edit_mode={edit_mode}
          set_edit_mode={set_edit_mode}
          handle_create_activity={handle_create_activity}
          handle_update_activity={handle_update_activity}
          handle_delete_activity={handle_delete_activity}
        />
      </div>
    </div>
  );
};

export default App;
