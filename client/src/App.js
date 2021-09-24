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
import Search from "./component/Search";


export const history = createBrowserHistory({
  basename: "/"
});

const App = () => {
  return (
    <div>
      <Navbar/>
      <Router history={history}>
        <Route exact path="/" component={Home} />
        <Route exact path="/items" component={Search} />
        <Route exact path="/items/:id" component={Product} />
      </Router>
    </div>
  );
}

export default App;