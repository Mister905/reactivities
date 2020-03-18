import React from "react";
import ReactDOM from "react-dom";
import "./assets/scss/index.scss";
import App from "./App";
import "materialize-css/dist/css/materialize.min.css";
import { Provider } from "react-redux";
import { Store } from "redux";
import { store, IAppState } from "./store";
import { Router } from "react-router-dom";

interface IProps {
  store: Store<IAppState>;
}

const Root: React.FC<IProps> = props => {
  return (
    <Provider store={props.store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(
  <Root store={store} />,
  document.getElementById("root") as HTMLElement
);
