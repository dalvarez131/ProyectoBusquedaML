/* External */
import React from "react";
import {Route, Switch} from "react-router-dom";

/* Style */
import "./App.scss";

/* Components */
import Home from "./component/Home";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Product from "./component/Product";
import Result from "./component/Result";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/items" component={Result} />
        <Route strict path="/items/:id" component={Product} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;