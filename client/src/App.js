/* External */
import {createBrowserHistory} from "history";
import React from "react";
import {Route, Router} from "react-router-dom";

/* Style */
import "./App.scss";

/* Components */
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Product from "./component/Product";
import Result from "./component/Result";


export const history = createBrowserHistory({
  basename: "/"
});

const App = () => {
  return (
    <div>
      <Navbar/>
      <Router history={history}>
        <Route exact path="/" component={Home} />
        <Route exact path="/items" component={Result} />
        <Route strict path="/items/:id" component={Product} />
      </Router>
    </div>
  );
}

export default App;