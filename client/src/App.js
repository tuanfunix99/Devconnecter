import React, { Fragment, useEffect } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from './components/layout/Dashboard';
import { useDispatch } from 'react-redux';
import allActions from "./actions/allActions";



import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allActions.authAction.fetchUser());
  }, [dispatch]);

  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
