/* External */
import React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux'

/* Components */
import App from "./App";

/* Others */
import store from './app/store'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
