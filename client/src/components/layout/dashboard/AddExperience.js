import React, { useState } from "react";

const AddExperience = (props) => {
  const [isCurrent, setCurrent] = useState(true);
  const [exp, setExp] = useState({
    title: "",
    company: "",
    location: "",
    from: "",
    to: "",
    current: "",
    description: "",
  });

  const onChangeHandler = (e) => {
    setExp((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  };

  const onSetCurrent = () => {
    setCurrent(!isCurrent);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    exp.current = exp.current === "false" || exp.current === "" ? false : true;
    props.onAdd(exp);
  };

  return (
    <section className="container">
      <h1 className="large text-primary">Add An Experience</h1>
      <p className="lead">
        <i className="fas fa-code-branch"></i> Add any developer/programming
        positions that you have had in the past
      </p>
      <small>* = required field</small>
      <form onSubmit={onSubmitHandler} className="form">
        <div className="form-group">
          <input
            onChange={(e) => onChangeHandler(e)}
            type="text"
            placeholder="* Job Title"
            name="title"
            required
          />
        </div>
        <div className="form-group">
          <input
            onChange={(e) => onChangeHandler(e)}
            type="text"
            placeholder="* Company"
            name="company"
            required
          />
        </div>
        <div className="form-group">
          <input
            onChange={(e) => onChangeHandler(e)}
            type="text"
            placeholder="Location"
            name="location"
          />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input onChange={(e) => onChangeHandler(e)} type="date" name="from" />
        </div>
        <div className="form-group">
          <p>
            <input
              onClick={onSetCurrent}
              onChange={(e) => onChangeHandler(e)}
              type="checkbox"
              name="current"
              value={isCurrent}
            />{" "}
            Current Job
          </p>
        </div>
        <div className="form-group">
          <h4>To Date</h4>
          <input onChange={(e) => onChangeHandler(e)} type="date" name="to" />
        </div>
        <div className="form-group">
          <textarea
            onChange={(e) => onChangeHandler(e)}
            name="description"
            cols="30"
            rows="5"
            placeholder="Job Description"
          ></textarea>
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <button
          onClick={(cpn) => props.onShow("isexp")}
          className="btn btn-light my-1"
        >
          Go Back
        </button>
      </form>
    </section>
  );
};

export default AddExperience;
