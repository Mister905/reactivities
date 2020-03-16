import {
  applyMiddleware,
  combineReducers,
  createStore,
  Store,
  compose
} from "redux";
import thunk from "redux-thunk";
import { activity_reducer } from "../reducers/activity_reducer";
import IActivityState from "../data/activity/IActivityState";

export interface IAppState {
  activity: IActivityState;
}

const root_reducer = combineReducers<IAppState>({
  activity: activity_reducer
});

export const store: Store = createStore(
  root_reducer,
  compose(
    applyMiddleware(thunk),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);
