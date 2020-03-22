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

interface MatchParams {
  id: string;
}

interface IProps extends RouteComponentProps<MatchParams> {}

const ActivityDetails: React.FC<IProps> = props => {
  const activity = useSelector((state: IAppState) => state.activity);

  const dispatch = useDispatch();

  useEffect(() => {
    if (props.match.params.id) {
      dispatch(set_current_activity(props.match.params.id));
    }
    return () => {
      dispatch(clear_current_activity());
    };
  }, [props.match.params.id, dispatch]);

  if (activity.loading_selected_activity || !activity.selected_activity) {
    return (
      <div className="row mt-50">
        <div className="col m12 center-align">
          <Preloader />
        </div>
      </div>
    );
  } else {
    return (
      <div className="row mt-50">
        <div className="col m8 offset-m2 card">
          <div className="card-image">
            <img
              src={require(`../../assets/img/${activity.selected_activity.category}.jpg`)}
              alt={`${activity.selected_activity.category}`}
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
                    className="btn btn-custom btn-wide"
                  >
                    Edit
                  </button>
                </div>
                <div className="col m6">
                  <button
                    onClick={() => props.history.push("/activities")}
                    className="btn btn-custom btn-wide"
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

  // if (activity.selected_activity) {
  //   return (
  //     <div>
  //       <div className="card">
  //         <div className="card-image">
  //           <img
  //             src={require(`../../assets/img/${activity.selected_activity.category}.jpg`)}
  //             alt={`${activity.selected_activity.category}`}
  //           />
  //           <span className="card-title custom-card-title">
  //             {activity.selected_activity.title}
  //           </span>
  //         </div>
  //         <div className="card-content">
  //           <div className="row">
  //             <p>{activity.selected_activity.description}</p>
  //             <p>{activity.selected_activity.category}</p>
  //             <p>
  //               {moment(activity.selected_activity.date).format("MMMM Do YYYY")}
  //             </p>
  //             <p>{activity.selected_activity.city}</p>
  //             <p>{activity.selected_activity.venue}</p>
  //           </div>
  //           <div className="row">
  //             <div className="col m10 offset-m1">
  //               <div className="col m6">
  //                 <button
  //                   onClick={() =>
  //                     props.history.push(
  //                       `/activities/${activity.selected_activity?.id}/edit`
  //                     )
  //                   }
  //                   className="btn btn-custom btn-wide"
  //                 >
  //                   Edit
  //                 </button>
  //               </div>
  //               <div className="col m6">
  //                 <button
  //                   onClick={() => props.history.push("/activities")}
  //                   className="btn btn-custom btn-wide"
  //                 >
  //                   Cancel
  //                 </button>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div className="row mt-50">
  //       <div className="col m12 center-align">
  //         <Preloader />
  //       </div>
  //     </div>
  //   );
  // }
};

export default withRouter(ActivityDetails);
