import IActivity from "../../data/activity/IActivity";
import ActivityActionTypes from "./ActivityActionTypes.enum";

export interface IGetActivities {
  type: ActivityActionTypes.GET_ACTIVITIES;
  payload: IActivity[];
}

export interface IGetActivity {
  type: ActivityActionTypes.GET_ACTIVITY;
  payload: IActivity;
}

export interface ISetCreateMode {
  type: ActivityActionTypes.SET_CREATE_MODE;
  payload: boolean;
}

export interface ISetEditMode {
  type: ActivityActionTypes.SET_EDIT_MODE;
  payload: boolean;
}
