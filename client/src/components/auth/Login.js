import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import allActions from '../../actions/allActions';
import { Redirect } from 'react-router-dom';

const Login = () => {

  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChangeFormData = (e) => {
    setFormData((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  };


  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(allActions.authAction.login(formData));
  }

  if(auth.isAuthenticated){
    return <Redirect to="/dashboard" />
  }


  return (
    <section className="container">
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Sign into Your Account
      </p>
      <form onSubmit={(e) => onSubmitHandler(e)} className="form" action="dashboard.html">
        <div className="form-group">
          <input
            onBlur={(e) => onChangeFormData(e)}
            type="email"
            placeholder="Email Address"
            name="email"
            required
          />
        </div>
        <div className="form-group">
          <input
            onBlur={(e) => onChangeFormData(e)}
            type="password"
            placeholder="Password"
            name="password"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <a href="register.html">Sign Up</a>
      </p>
    </section>
  );
};

export default Login;
