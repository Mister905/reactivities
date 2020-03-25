import React, { useEffect } from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { IAppState } from "../../store";
import { withRouter, RouteComponentProps } from "react-router";
import {
  set_current_activity,
  clear_current_activity
} from "../../actions/activity/ActivityActions";
import Preloader from "../preloader/Preloader";
import Header from "./header/Header";
import Info from "./info/Info";
import Chat from "./chat/Chat";
import Sidebar from "./sidebar/Sidebar";
import Modal from "../modal/Modal";

interface MatchParams {
  id: string;
}

interface IProps extends RouteComponentProps<MatchParams> {}

const ActivityDetails: React.FC<IProps> = props => {
  const activity = useSelector((state: IAppState) => state.activity);

  const dispatch = useDispatch();

  useEffect(() => {
    // Create an scoped async function in the hook
    async function set_current_activity_async() {
      try {
        const res = await dispatch(set_current_activity(props.match.params.id));
      } catch (error) {
        props.history.push("/404");
      }
    }
    // Execute the created function directly
    set_current_activity_async();

    return () => {
      dispatch(clear_current_activity());
    };
  }, [props.match.params.id, dispatch, props.history]);

  if (activity.loading_selected_activity || !activity.selected_activity) {
    return (
      <div className="container">
        <div className="row mt-50">
          <div className="col m12 center-align">
            <Preloader />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="row mt-25">
          <div className="col m7">
            <Header activity={activity.selected_activity} />
            <Info activity={activity.selected_activity} />
            <Chat />
            <div className="row">
              <div className="col m12">
                <Modal activity={activity.selected_activity} style={"delete-activity-btn"} />
              </div>
            </div>
          </div>
          <div className="col m5">
            <Sidebar />
          </div>
        </div>
      </div>
    );
  }
};

export default withRouter(ActivityDetails);
