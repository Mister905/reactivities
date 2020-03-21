// Import redux types
import { Dispatch } from "redux";
import Activities from "../../api/activities";
import ActivityActionTypes from "./ActivityActionTypes.enum";
import {
  IGetActivities,
  ISetCurrentActivity,
  IClearCurrentActivity,
  ICreateActivity,
  IUpdateActivity,
  IDeleteActivity
} from "./IActivityActions";
import IActivity from "../../data/activity/IActivity";
import moment from "moment";

export const get_activites = () => async (
  dispatch: Dispatch<IGetActivities>
) => {
  try {
    const res = await Activities.list();

    const sorted = res.sort(
      (a: IActivity, b: IActivity) =>
        moment(b.date).valueOf() - moment(a.date).valueOf()
    );

    // var map: any = {};

    // for (let i = 0; i < sorted.length; i++) {
    //   const date = moment(sorted[i].date).format("MM-DD-YYYY");

    //   if (!map[date]) {
    //     map[date] = [sorted[i]];
    //   } else {
    //     map[date].push(sorted[i]);
    //   }
    // }

    dispatch({
      type: ActivityActionTypes.GET_ACTIVITIES,
      payload: sorted
    });
  } catch (error) {
    console.error(error);
  }
};

export const set_current_activity = (activity_id: string) => async (
  dispatch: Dispatch<ISetCurrentActivity>
) => {
  try {
    const res = await Activities.details(activity_id);

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
    console.error(error);
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
