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
  IOpenEditForm,
  ICreateActivity,
  IUpdateActivity,
  IDeleteActivity
} from "./IActivityActions";
import IActivity from "../../data/activity/IActivity";

import { store } from "../../store";

export const get_activites = () => async (
  dispatch: Dispatch<IGetActivities>
) => {
  try {
    const res = await Activities.list();

    dispatch({
      type: ActivityActionTypes.GET_ACTIVITIES,
      payload: res
    });
  } catch (error) {
    console.error(error);
  }
};

export const set_current_activity = (activity: IActivity) => async (
  dispatch: Dispatch<ISetCurrentActivity>
) => {
  try {
    const res = await Activities.details(activity.id);

    dispatch({
      type: ActivityActionTypes.SET_CURRENT_ACTIVITY,
      payload: res
    });
  } catch (error) {
    console.error(error);
  }
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

export const create_activity = (activity: IActivity) => async (
  dispatch: Dispatch<ICreateActivity>
) => {
  try {
    await Activities.create(activity);
    dispatch({
      type: ActivityActionTypes.CREATE_ACTIVITY,
      payload: activity
    });
  } catch (error) {
    console.error(error);
  }
};

export const update_activity = (activity: IActivity) => async (
  dispatch: Dispatch<IUpdateActivity>
) => {
  try {
    await Activities.update(activity);

    dispatch({
      type: ActivityActionTypes.UPDATE_ACTIVITY,
      payload: activity
    });
  } catch (error) {
    console.error(error.message);
  }
};

export const delete_activity = (activity: IActivity) => async (
  dispatch: Dispatch<IDeleteActivity | IGetActivities>
) => {
  try {
    await Activities.delete(activity.id);

    dispatch({
      type: ActivityActionTypes.DELETE_ACTIVITY,
      payload: activity
    });

    const res = await Activities.list();
    dispatch({
      type: ActivityActionTypes.GET_ACTIVITIES,
      payload: res
    });
  } catch (error) {
    console.error(error.message);
  }
};
