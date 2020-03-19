import React, { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import { useDispatch } from "react-redux";
import { get_activites } from "./actions/activity/ActivityActions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Components
import Home from "./components/home/Home";
import Dashboard from "./components/dashboard/Dashboard";
import CreateActivity from "./components/create_activity/CreateActivity";
import EditActivity from "./components/edit_activity/EditActivity";
import ActivityDetails from "./components/activity_details/ActivityDetails";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_activites());
  }, []);

  return (
    <div>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/activities" component={Dashboard} />
            <Route exact path="/activities/create" component={CreateActivity} />
            <Route exact path="/activities/:id" component={ActivityDetails} />
            <Route exact path="/activities/:id/edit" component={EditActivity} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
