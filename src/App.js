import React from "react";
// Routing
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components
import Header from "./components/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
// Context
import UserProvider from "./context";

// Styles
import { GlobalStyle } from "./GlobalStyle";

const App = () => (
  <Router>
    <UserProvider>
      <Header />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/:movieId">
          <Movie />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <GlobalStyle />
    </UserProvider>
  </Router>
);

export default App;
