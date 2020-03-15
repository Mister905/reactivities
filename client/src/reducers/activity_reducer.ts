import { Reducer } from "redux";
import { ActivityActions, ActivityActionTypes } from "../actions/activity";
import { IActivity } from "../models/activity";

export interface IActivityState {
  readonly activities: IActivity[];
}

const initial_activity_state: IActivityState = {
  activities: []
};

export const activity_reducer: Reducer<IActivityState, ActivityActions> = (
  state = initial_activity_state,
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case ActivityActionTypes.GET_ALL: {
      return {
        ...state,
        activities: payload
      };
    }
    default:
      return state;
  }
};
