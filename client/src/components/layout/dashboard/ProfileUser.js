import React from "react";
import moment from "moment";

const ProfileUser = (props) => {
  const displayExperience = () => {
    if (props.profile && props.profile.experience.length > 0) {
      return props.profile.experience.map((experience, key) => {
        return (
          <tr key={key}>
            <td>{experience.company}</td>
            <td className="hide-sm">{experience.title}</td>
            <td className="hide-sm">
              {moment(experience.from).format("L")} -{" "}
              {experience.current ? "Now" : moment(experience.to).format("L")}
            </td>
            <td>
              <button
                onClick={() => props.onDeleteExperience(experience._id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        );
      });
    }
  };

  const displayEducation = () => {
    if (props.profile && props.profile.education.length > 0) {
      return props.profile.education.map((education, key) => {
        return (
          <tr key={key}>
            <td>{education.school}</td>
            <td className="hide-sm">{education.degree}</td>
            <td className="hide-sm">
              {moment(education.from).format("L")} -{" "}
              {education.current ? "Now" : moment(education.to).format("L")}
            </td>
            <td>
              <button onClick={() => props.onDeleteEducation(education._id)} className="btn btn-danger">Delete</button>
            </td>
          </tr>
        );
      });
    }
  };

  return (
    <section className="container">
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Welcome {props.profile.user.name}
      </p>
      <div className="dash-buttons">
        <button
          onClick={(cpn) => props.onShow("isEdit")}
          className="btn btn-light"
        >
          <i className="fas fa-user-circle text-primary"></i> Edit Profile
        </button>
        <button
          onClick={(cpn) => props.onShow("isexp")}
          className="btn btn-light"
        >
          <i className="fab fa-black-tie text-primary"></i> Add Experience
        </button>
        <button
          onClick={(cpn) => props.onShow("isedu")}
          className="btn btn-light"
        >
          <i className="fas fa-graduation-cap text-primary"></i> Add Education
        </button>
      </div>

      <h2 className="my-2">Experience Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th className="hide-sm">Title</th>
            <th className="hide-sm">Years</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{displayExperience()}</tbody>
      </table>

      <h2 className="my-2">Education Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>School</th>
            <th className="hide-sm">Degree</th>
            <th className="hide-sm">Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{displayEducation()}</tbody>
      </table>

      <div className="my-2">
        <button className="btn btn-danger">
          <i className="fas fa-user-minus"></i>
          Delete My Account
        </button>
      </div>
    </section>
  );
};

export default ProfileUser;
