import React, { Fragment, useEffect } from "react";
import "./App.css";
import Navbar from "./components/layout/nav/Navbar";
import Landing from "./components/layout/nav/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from './components/layout/dashboard/Dashboard';
import Verify from "./components/auth/Verify";
import Profiles from './components/layout/profile/Profiles'
import Profile from './components/layout/profile/Profile'
import { useDispatch } from 'react-redux';
import allActions from "./actions/allActions";

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

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
          <Route path="/verify" exact component={Verify} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/profiles" exact component={Profiles} />
          <Route path="/profile/:id" exact component={Profile} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
