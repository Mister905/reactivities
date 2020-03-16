// Import redux types
import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import IActivityState from "../../data/activity/IActivityState";
import Activities from "../../api/activities";
import ActivityActionTypes from "./ActivityActionTypes.enum";
import {
  IGetActivities,
  ISetCurrentActivity,
  IClearCurrentActivity,
  ISetCreateMode,
  ISetEditMode,
  IOpenCreateForm,
  IOpenEditForm
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

export const set_current_activity: ActionCreator<ThunkAction<
  Promise<any>,
  IActivityState,
  IActivity,
  ISetCurrentActivity
>> = (activity: IActivity) => {
  return async (dispatch: Dispatch) => {
    try {
      const set_current_activity = async (activity: IActivity) => {
        const res = await Activities.details(activity.id);
        dispatch({
          type: ActivityActionTypes.SET_CURRENT_ACTIVITY,
          payload: res
        });
      };
      set_current_activity(activity);
    } catch (err) {
      console.error(err);
    }
  };
};

export const clear_current_activity = (): IClearCurrentActivity => {
  return {
    type: ActivityActionTypes.CLEAR_CURRENT_ACTIVITY
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

export const open_create_form = (): IOpenCreateForm => {
  return {
    type: ActivityActionTypes.OPEN_CREATE_FORM
  };
};

export const open_edit_form = (): IOpenEditForm => {
  return {
    type: ActivityActionTypes.OPEN_EDIT_FORM
  };
};
