import IActivity from "./IActivity";

export default interface IActivityState {
  readonly activities: IActivity[];
  readonly loading_activities: boolean;
  readonly selected_activity?: IActivity;
  readonly loading_selected_activity: boolean;
  readonly create_mode: boolean;
  readonly edit_mode: boolean;
}
