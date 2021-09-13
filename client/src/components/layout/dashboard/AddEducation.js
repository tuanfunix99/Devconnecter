import React, { useState } from "react";

const AddEducation = (props) => {
  const [isCurrent, setCurrent] = useState(true);
  const [edu, setEdu] = useState({
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: "",
    description: "",
  });

  const onChangeHandler = (e) => {
    setEdu((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  };

  const onSetCurrent = () => {
    setCurrent(!isCurrent);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    edu.current = edu.current === "false" || edu.current === "" ? false : true;
    props.onAdd(edu);
  };


  return (
    <section className="container">
      <h1 className="large text-primary">Add Your Education</h1>
      <p className="lead">
        <i className="fas fa-graduation-cap"></i> Add any school, bootcamp, etc
        that you have attended
      </p>
      <small>* = required field</small>
      <form onSubmit={onSubmitHandler} className="form">
        <div className="form-group">
          <input
            onChange={(e) => onChangeHandler(e)}
            type="text"
            placeholder="* School or Bootcamp"
            name="school"
            required
          />
        </div>
        <div className="form-group">
          <input
            onChange={(e) => onChangeHandler(e)}
            type="text"
            placeholder="* Degree or Certificate"
            name="degree"
            required
          />
        </div>
        <div className="form-group">
          <input
            onChange={(e) => onChangeHandler(e)}
            type="text"
            placeholder="Field Of Study"
            name="fieldofstudy"
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
            Current School or Bootcamp
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
            placeholder="Program Description"
          ></textarea>
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <button
          onClick={(cpn) => props.onShow("isedu")}
          className="btn btn-light my-1"
        >
          Go Back
        </button>
      </form>
    </section>
  );
};

export default AddEducation;
