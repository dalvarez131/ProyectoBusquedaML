/* External */
import React from "react";
import { render } from "react-dom";
import { Router } from "react-router-dom";
import { Provider, ReactReduxContext } from 'react-redux';
import {createBrowserHistory} from "history";

/* Components */
import App from "./App";

/* Others */
import store from './app/store'


export const history = createBrowserHistory({
  basename: "/"
});

render(
  <Provider store={store} context={ReactReduxContext}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("app")
);
