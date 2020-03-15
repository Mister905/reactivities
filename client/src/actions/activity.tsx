// Import redux types
import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import axios from "axios";
import { IActivity } from "../models/activity";
import { IActivityState } from "../reducers/activity_reducer";

// Create Action Constants
export enum ActivityActionTypes {
  GET_ALL = "GET_ALL"
}

// Interface for Get All Action Type
export interface IActivityGetAllAction {
  type: ActivityActionTypes.GET_ALL;
  payload: IActivity[];
}

/* 
Combine the action types with a union (we assume there are more)
example: export type CharacterActions = IGetAllAction | IGetOneAction ... 
*/
export type ActivityActions = IActivityGetAllAction;

/* Get All Action
<Promise<Return Type>, State Interface, Type of Param, Type of Action> */
export const get_all_activites: ActionCreator<ThunkAction<
  Promise<any>,
  IActivityState,
  null,
  IActivityGetAllAction
>> = () => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await axios.get("http://localhost:5000/api/activities");
      dispatch({
        type: ActivityActionTypes.GET_ALL,
        payload: res.data
      });
    } catch (err) {
      console.error(err);
    }
  };
};
