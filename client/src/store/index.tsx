import {
  applyMiddleware,
  combineReducers,
  createStore,
  Store,
  compose
} from "redux";
import thunk from "redux-thunk";
import { activity_reducer, IActivityState } from "../reducers/activity_reducer";

// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//   }
// }
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export interface IAppState {
  activity: IActivityState;
}

const root_reducer = combineReducers<IAppState>({
  activity: activity_reducer
});

// const middleware = applyMiddleware(thunk);
// const store: any = middleware(devtools(createStore))(rootReducer);

// export default store;

// export default function configure_store(): Store<IAppState, any> {
//   const store = createStore(
//     root_reducer,
//     composeEnhancers(),
//     applyMiddleware(thunk)
//   );
//   return store;
// }

export const store: Store = createStore(
  root_reducer,
  compose(
    applyMiddleware(thunk),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);
