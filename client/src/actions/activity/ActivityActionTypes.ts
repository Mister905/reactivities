import {
  IGetActivities,
  IGetActivity,
  ISetCreateMode,
  ISetEditMode
} from "./IActivityActions";

// Combine the action types with a union (we assume there are more)
type ActivityActions =
  | IGetActivities
  | IGetActivity
  | ISetCreateMode
  | ISetEditMode;

export default ActivityActions;
