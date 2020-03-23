import React from "react";
import SVGIcon from "../../svg_icon/SVGIcon";
import IActivity from "../../../data/activity/IActivity";
import moment from "moment";

interface IProps {
  activity: IActivity;
}

const Info: React.FC<IProps> = ({ activity }) => {
  return (
    <div>
      <div className="row mb-0">
        <div className="card col s12 m12">
          <ul className="collection activity-details-collection">
            <li className="collection-item flex">
              <span className="activity-list-item-icon">
                <SVGIcon icon={"info"} />
              </span>
              {activity.description}
            </li>
            <li className="collection-item flex">
              <span className="activity-list-item-icon">
                <SVGIcon icon={"calendar"} />
              </span>
              {moment(activity.date).format("MMMM D, YYYY")}
            </li>

            <li className="collection-item flex">
              <span className="activity-list-item-icon">
                <SVGIcon icon={"location_pin"} />
              </span>
              {activity.venue}, {activity.city}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Info;
