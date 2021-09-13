import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../../actions/allActions";
import { Link } from 'react-router-dom'

const Profiles = () => {
  const { profiles } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allActions.profileAction.getAllProfile());
  }, [dispatch]);

  console.log(profiles);

  const displayListProfile = () => {
    if (profiles.length > 0) {
      return profiles.map((profile, key) => {
        return (
          <div className="profile bg-light" key={key}>
            <img
              className="round-img"
              src={profile.user.avatar}
              alt={profile.user.name}
            />
            <div>
              <h2>{profile.user.name}</h2>
              <p>Developer at {profile.company}</p>
              <p>{profile.location}</p>
              <Link to={ "/profile/" + profile.user._id } className="btn btn-primary">
                View Profile
              </Link>
            </div>

            <ul>
              {profile.skills.split(",").map((skill, key) => {
                return (
                  <li className="text-primary" key={key}>
                    <i className="fas fa-check"></i> { skill }
                  </li>
                );
              })}
            </ul>
          </div>
        );
      });
    }
  };

  return (
    <section className="container">
      <h1 className="large text-primary">Developers</h1>
      <p className="lead">
        <i className="fab fa-connectdevelop"></i> Browse and connect with
        developers
      </p>
      <div className="profiles">{displayListProfile()}</div>
    </section>
  );
};

export default Profiles;
