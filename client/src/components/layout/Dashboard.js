import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../actions/allActions";
import ProfileUser from "./ProfileUser";
import CreateProfile from "./CreateProfile";

const Dashboard = () => {
  const auth = useSelector((state) => state.auth);
  const { profile, isProfile } = useSelector((state) => state.profile);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allActions.authAction.fetchUser());
    dispatch(allActions.profileAction.getProfileUser());
  },[dispatch]);

  if (!auth.isAuthenticated) {
    return <Redirect to="/login" />;
  }

  console.log(auth);

  const onSubmit = (profile) => {
    dispatch(allActions.profileAction.createProfileUser(profile));
  }

  return <div>
    {!isProfile && <CreateProfile onSubmit={(profile) => onSubmit(profile)} />}
    {isProfile && <ProfileUser profile={profile} />}
  </div>;
};

export default Dashboard;
