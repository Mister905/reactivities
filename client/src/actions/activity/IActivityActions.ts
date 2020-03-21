import IActivity from "../../data/activity/IActivity";
import ActivityActionTypes from "./ActivityActionTypes.enum";

export interface IGetActivities {
  type: ActivityActionTypes.GET_ACTIVITIES;
  payload: IActivity[];
}

export interface ISetCurrentActivity {
  type: ActivityActionTypes.SET_CURRENT_ACTIVITY;
  payload: IActivity;
}

export interface IClearCurrentActivity {
  type: ActivityActionTypes.CLEAR_CURRENT_ACTIVITY;
}

export interface ICreateActivity {
  type: ActivityActionTypes.CREATE_ACTIVITY;
  payload: IActivity;
}

export interface IUpdateActivity {
  type: ActivityActionTypes.UPDATE_ACTIVITY;
  payload: IActivity;
}

export interface IDeleteActivity {
  type: ActivityActionTypes.DELETE_ACTIVITY;
  payload: IActivity;
}
