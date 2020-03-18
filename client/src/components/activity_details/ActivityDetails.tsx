import React, { useEffect } from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { IAppState } from "../../store";
import { set_edit_mode } from "../../actions/activity/ActivityActions";
import { withRouter, RouteComponentProps } from "react-router";
import { set_current_activity } from "../../actions/activity/ActivityActions";

interface MatchParams {
  id: string;
}

interface IProps extends RouteComponentProps<MatchParams> {}

const ActivityDetails: React.FC<IProps> = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(set_current_activity(props.match.params.id));
  }, []);

  const activity = useSelector((state: IAppState) => state.activity);

  if (activity.selected_activity && !activity.edit_mode) {
    return (
      <div>
        <div className="card">
          <div className="card-image">
            <img
              src={require(`../../assets/img/${activity.selected_activity.category}.jpg`)}
            />
            <span className="card-title custom-card-title">
              {activity.selected_activity.title}
            </span>
          </div>
          <div className="card-content">
            <div className="row">
              <p>{activity.selected_activity.description}</p>
              <p>{activity.selected_activity.category}</p>
              <p>
                {moment(activity.selected_activity.date).format("MMMM Do YYYY")}
              </p>
              <p>{activity.selected_activity.city}</p>
              <p>{activity.selected_activity.venue}</p>
            </div>
            <div className="row">
              <div className="col m10 offset-m1">
                <div className="col m6">
                  <button
                    onClick={() =>
                      props.history.push(
                        `/activities/${activity.selected_activity?.id}/edit`
                      )
                    }
                    className="btn btn-wide"
                  >
                    Edit
                  </button>
                </div>
                <div className="col m6">
                  <button
                    onClick={() => props.history.push("/activities")}
                    className="btn btn-wide"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default withRouter(ActivityDetails);
