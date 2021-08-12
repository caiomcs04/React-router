import React from "react";
import "./assets/css/base/base.css";
import Home from "./paginas/Home";
import About from "./paginas/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error404 from "./paginas/Error404";
import Header from "./componentes/Header";

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route>
            <Error404/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
