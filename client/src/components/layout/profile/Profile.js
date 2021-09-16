import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../../actions/allActions";
import moment from "moment";

const Profile = (props) => {
  const { singleProfile } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allActions.profileAction.getSingleProfile(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  const displaySkills = (skills) => {
    if (skills.length > 0) {
      return skills.map((skill, key) => {
        return (
          <div className="p-1" key={key}>
            <i className="fa fa-check"></i>
            {skill}
          </div>
        );
      });
    }
  };

  const displayTop = (singleProfile) => {
    return (
      <div className="profile-top bg-primary p-2">
        <img
          className="round-img my-1"
          src={'/api/auth/get-avatar/' + singleProfile.user._id}
          alt={singleProfile.user.name ? singleProfile.user.name : ""}
        />
        <h1 className="large">
          {singleProfile.user.name ? singleProfile.user.name : ""}
        </h1>
        <p className="lead">
          Developer at {singleProfile.company ? singleProfile.company : "..."}
        </p>
        <p>{singleProfile.location ? singleProfile.location : ""}</p>
        <div className="icons my-1">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-globe fa-2x"></i>
          </a>
          <a
            href={
              singleProfile.social.twitter ? singleProfile.social.twitter : "#"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a
            href={
              singleProfile.social.facebook
                ? singleProfile.social.facebook
                : "#"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a
            href={
              singleProfile.social.linkedin
                ? singleProfile.social.linkedin
                : "#"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a
            href={
              singleProfile.social.youtube ? singleProfile.social.youtube : "#"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube fa-2x"></i>
          </a>
          <a
            href={
              singleProfile.social.instagram
                ? singleProfile.social.instagram
                : "#"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        </div>
      </div>
    );
  };

  const displayAbout = (singleProfile) => {
    return (
      <div className="profile-about bg-light p-2">
        <h2 className="text-primary">
          {singleProfile.user.name ? singleProfile.user.name : ""}'s Bio
        </h2>
        <p>{singleProfile.bio ? singleProfile.bio : ""}</p>
        <div className="line"></div>
        <h2 className="text-primary">Skill Set</h2>

        <div className="skills">
          {displaySkills(singleProfile.skills.split(","))}
        </div>
      </div>
    );
  };

  const displayExperience = (singleProfile) => {
    if (singleProfile.experience.length > 0) {
      return singleProfile.experience.map((exp, key) => {
        return (
          <div key={key}>
            <h3 className="text-dark">{exp.company}</h3>
            <p>
              {moment(exp.from).format("L")} -{" "}
              {exp.current ? "Now" : moment(exp.to).format("L")}
            </p>
            <p>
              <strong>Position: </strong>
              {exp.title}
            </p>
            <p>
              <strong>Description: </strong>
              {exp.description}
            </p>
          </div>
        );
      });
    }
    else{
        return <h3>Updating...</h3>;
    }
  };


  const displayEducation = (singleProfile) => {
    if (singleProfile.education.length > 0) {
      return singleProfile.education.map((edu, key) => {
        return (
            <div key={key}>
            <h3>{edu.school}</h3>
            <p>
              {moment(edu.from).format("L")} -{" "}
              {edu.current ? "Now" : moment(edu.to).format("L")}
            </p>
            <p>
              <strong>Degree: </strong>{edu.degree}
            </p>
            <p>
              <strong>Field Of Study: </strong>{edu.fieldofstudy}
            </p>
            <p>
              <strong>Description: </strong>{edu.description}
            </p>
          </div>
        );
      });
    }
    else{
        return <h3>Updating...</h3>;
    }
  };

  const displayProfile = () => {
    if (singleProfile) {
      return (
        <div className="profile-grid my-1">
          {/* // Top */}
          {displayTop(singleProfile)}
          {/* <!-- About --> */}
          {displayAbout(singleProfile)}
          {/* <!-- Experience --> */}
          <div className="profile-exp bg-white p-2">
            <h2 className="text-primary">Experience</h2>
            {displayExperience(singleProfile)}
          </div>
          {/* <!-- Education --> */}
          <div className="profile-edu bg-white p-2">
            <h2 className="text-primary">Education</h2>
            {displayEducation(singleProfile)}
          </div>
        </div>
      );
    }
  };

  return (
    <section className="container">
      <Link to="/profiles" className="btn btn-light">
        Back To Profiles
      </Link>
      {displayProfile()}
    </section>
  );
};

export default Profile;
