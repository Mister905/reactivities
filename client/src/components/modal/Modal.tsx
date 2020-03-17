import React, {  } from "react";
import * as M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import IActivity from "../../data/activity/IActivity";
import { delete_activity } from "../../actions/activity/ActivityActions";
import { connect } from "react-redux";

interface IProps {
  activity: IActivity;
  delete_activity: (activity: IActivity) => void;
}

class Modal extends React.Component<IProps, {}> {
  componentDidMount() {
    const options = {
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };

    const elem = document.querySelector("#delete_activity_modal")!;

    M.Modal.init(elem, options);
  }

  render() {
    return (
      <div>
        <a
          className="btn red modal-trigger"
          data-target="delete_activity_modal"
        >
          Delete
        </a>
        <div id="delete_activity_modal" className="modal">
          <div className="modal-content">
            <div className="row">
              <div className="col m12 center-align">
                <h4>Delete Activity</h4>
                <p>Are you sure you want to proceed with this action?</p>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <a className="modal-close btn btn-custom btn-cancel-delete">
              Cancel
            </a>
            <a
              onClick={() => this.props.delete_activity(this.props.activity)}
              className="modal-close btn btn-custom btn-confirm-delete"
            >
              Confirm
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  delete_activity: (activity: IActivity) => dispatch(delete_activity(activity))
});

export default connect(null, mapDispatchToProps)(Modal);
