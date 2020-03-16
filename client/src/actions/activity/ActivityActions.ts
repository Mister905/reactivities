// Import redux types
import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import IActivityState from "../../data/activity/IActivityState";
import Activities from "../../api/activities";
import ActivityActionTypes from "./ActivityActionTypes.enum";
import {
  IGetActivities,
  IGetActivity,
  ISetCreateMode,
  ISetEditMode
} from "./IActivityActions";
import IActivity from "../../data/activity/IActivity";

{
  /* <Promise<Return Type>, State Interface, Type of Param, Type of Action> */
}
export const get_activites: ActionCreator<ThunkAction<
  Promise<any>,
  IActivityState,
  null,
  IGetActivities
>> = () => {
  return async (dispatch: Dispatch) => {
    try {
      const get_all_activites = async () => {
        const res = await Activities.list();

        dispatch({
          type: ActivityActionTypes.GET_ACTIVITIES,
          payload: res
        });
      };
      get_all_activites();
    } catch (err) {
      console.error(err);
    }
  };
};

export const get_activity: ActionCreator<ThunkAction<
  Promise<any>,
  IActivityState,
  null,
  IGetActivity
>> = (activity: IActivity) => {
  return async (dispatch: Dispatch) => {
    try {
      const get_activity = async (activity: IActivity) => {
        const res = await Activities.details(activity.id);
        dispatch({
          type: ActivityActionTypes.GET_ACTIVITY,
          payload: res
        });
      };
      get_activity(activity);
    } catch (err) {
      console.error(err);
    }
  };
};

export const set_create_mode = (is_create_mode: boolean): ISetCreateMode => {
  return {
    type: ActivityActionTypes.SET_CREATE_MODE,
    payload: is_create_mode
  };
};

export const set_edit_mode = (is_edit_mode: boolean): ISetEditMode => {
  return {
    type: ActivityActionTypes.SET_EDIT_MODE,
    payload: is_edit_mode
  };
};
