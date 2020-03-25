import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { get_activites } from "./actions/activity/ActivityActions";
import { Route, Switch } from "react-router-dom";
// Components
import Home from "./components/home/Home";
import Dashboard from "./components/dashboard/Dashboard";
import CreateActivity from "./components/create_activity/CreateActivity";
import EditActivity from "./components/edit_activity/EditActivity";
import ActivityDetails from "./components/activity_details/ActivityDetails";
import PrivateRoute from "./components/private_route/PrivateRoute";
import NotFound from "./components/not_found/NotFound";

import { createBrowserHistory } from "history";
export const history = createBrowserHistory();

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_activites());
  }, [dispatch]);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <PrivateRoute exact path="/activities" component={Dashboard} />
      <PrivateRoute
        exact
        path="/activities/create"
        component={CreateActivity}
      />
      <PrivateRoute exact path="/activities/:id" component={ActivityDetails} />
      <PrivateRoute
        exact
        path="/activities/:id/edit"
        component={EditActivity}
      />
      <PrivateRoute component={NotFound} />
    </Switch>
  );
};

export default App;
