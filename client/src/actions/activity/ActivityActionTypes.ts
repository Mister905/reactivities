import {
  IGetActivities,
  ISetCurrentActivity,
  IClearCurrentActivity,
  ISetCreateMode,
  ISetEditMode,
  IOpenCreateForm,
  IOpenEditForm
} from "./IActivityActions";

// Combine the action types with a union (we assume there are more)
type ActivityActions =
  | IGetActivities
  | ISetCurrentActivity
  | IClearCurrentActivity
  | ISetCreateMode
  | ISetEditMode
  | IOpenCreateForm
  | IOpenEditForm;

export default ActivityActions;
