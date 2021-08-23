import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../actions/allActions";
import ProfileUser from "./ProfileUser";
import CreateProfile from "./CreateProfile";

const Dashboard = () => {
  const auth = useSelector((state) => state.auth);
  const { profile } = useSelector((state) => state.profile);
  const [isProfile, setIsProfile] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allActions.authAction.fetchUser());
    dispatch(allActions.profileAction.getProfileUser());
    if(profile.user !== undefined){
      setIsProfile(true);
    }
  },[dispatch, auth]);

  if (!auth.isAuthenticated) {
    return <Redirect to="/login" />;
  }

  const onSubmit = (profile) => {
    dispatch(allActions.profileAction.createProfileUser(profile));
  }

  return <div>
    {!isProfile && <CreateProfile onSubmit={(profile) => onSubmit(profile)} />}
    {isProfile && <ProfileUser profile={profile} />}
  </div>;
};

export default Dashboard;
