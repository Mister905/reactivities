import { Reducer } from "redux";
import ActivityActions from "../actions/activity/ActivityActionTypes";
import ActivityActionTypes from "../actions/activity/ActivityActionTypes.enum";
import IActivityState from "../data/activity/IActivityState";

const initial_activity_state: IActivityState = {
  activities: [],
  loading_activities: true,
  selected_activity: undefined,
  loading_selected_activity: true
};

export const activity_reducer: Reducer<IActivityState, ActivityActions> = (
  state = initial_activity_state,
  action
) => {
  switch (action.type) {
    case ActivityActionTypes.GET_ACTIVITIES: {
      return {
        ...state,
        activities: action.payload,
        loading_activities: false
      };
    }
    case ActivityActionTypes.SET_CURRENT_ACTIVITY: {
      return {
        ...state,
        selected_activity: action.payload,
        loading_selected_activity: false
      };
    }
    case ActivityActionTypes.CLEAR_CURRENT_ACTIVITY: {
      return {
        ...state,
        selected_activity: undefined,
        loading_selected_activity: true
      };
    }
    case ActivityActionTypes.CREATE_ACTIVITY: {
      return {
        ...state,
        activities: [...state.activities, action.payload],
        selected_activity: action.payload,
        loading_selected_activity: true
      };
    }
    case ActivityActionTypes.UPDATE_ACTIVITY: {
      return {
        ...state,
        activities: state.activities.map(activity => {
          if (activity.id === action.payload.id) {
            return action.payload;
          }
          return activity;
        }),
        selected_activity: action.payload,
        loading_selected_activity: true
      };
    }
    case ActivityActionTypes.DELETE_ACTIVITY: {
      return {
        ...state,
        activities: state.activities.filter(activity => {
          if (activity.id !== action.payload.id) {
            return activity;
          }
        })
      };
    }
    default:
      return state;
  }
};
