import { Reducer } from "redux";
import ActivityActions from "../actions/activity/ActivityActionTypes";
import ActivityActionTypes from "../actions/activity/ActivityActionTypes.enum";
import IActivityState from "../data/activity/IActivityState";

const initial_activity_state: IActivityState = {
  activities: [],
  loading_activities: true,
  selected_activity: undefined,
  loading_selected_activity: true,
  create_mode: false,
  edit_mode: false
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
        loading_selected_activity: false,
        create_mode: false
      };
    }
    case ActivityActionTypes.CLEAR_CURRENT_ACTIVITY: {
      return {
        ...state,
        selected_activity: undefined
      };
    }
    case ActivityActionTypes.SET_CREATE_MODE: {
      return {
        ...state,
        create_mode: action.payload
      };
    }
    case ActivityActionTypes.SET_EDIT_MODE: {
      return {
        ...state,
        edit_mode: action.payload
      };
    }
    case ActivityActionTypes.OPEN_CREATE_FORM: {
      return {
        ...state,
        selected_activity: undefined,
        edit_mode: false,
        create_mode: true
      };
    }
    case ActivityActionTypes.CREATE_ACTIVITY: {
      return {
        ...state,
        activities: [...state.activities, action.payload],
        selected_activity: action.payload
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
        selected_activity: action.payload
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
