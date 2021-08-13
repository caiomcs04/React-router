import React from "react";
import "./assets/css/base/base.css";
import Home from "./paginas/Home";
import About from "./paginas/About";

//Dependencias responsáveis para criação de rotas.
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Error404 from "./paginas/Error404";
import Header from "./componentes/Header";
import Post from "./paginas/Post"
import Category from "./paginas/Category";

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
          <Route path="/categoria/:id">
            <Category />
          </Route>
          <Route path="/posts/:id">
            <Post />
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
