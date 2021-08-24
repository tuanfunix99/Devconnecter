import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../actions/allActions";
import { Redirect } from "react-router-dom";

const Register = () => {
  const register = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const[create, setCreate] = useState(false);

  const changeFormValue = (e) => {
    setFormData((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (formData.password !== formData.password2) {
      return;
    }
    dispatch(allActions.authAction.createUser(formData));
    setCreate(true);
  };

  if (register.createSucess) {
    return <Redirect to="/Verify" />
  }

  return (
    <section className="container">
      {create && <div className="alert alert-primary">Creating...</div>}
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Create Your Account
      </p>
      <form className="form" action="create-profile.html">
        <div className="form-group">
          <input
            onBlur={(e) => changeFormValue(e)}
            type="text"
            placeholder="Name"
            name="name"
            required
          />
        </div>
        <div className="form-group">
          <input
            onBlur={(e) => changeFormValue(e)}
            type="email"
            placeholder="Email Address"
            name="email"
          />
          <small className="form-text">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className="form-group">
          <input
            onBlur={(e) => changeFormValue(e)}
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
          />
        </div>
        <div className="form-group">
          <input
            onBlur={(e) => changeFormValue(e)}
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="6"
          />
        </div>
        <input
          onClick={(e) => onSubmitHandler(e)}
          type="submit"
          className="btn btn-primary"
          value="Register"
        />
      </form>
      <p className="my-1">
        Already have an account? <a href="login.html">Sign In</a>
      </p>
    </section>
  );
};

export default Register;
