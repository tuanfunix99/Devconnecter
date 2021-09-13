import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../../actions/allActions";
import ProfileUser from "./ProfileUser";
import CreateProfile from "./CreateProfile";
import EditProfile from "./EditProfile";
import AddExperience from "./AddExperience";
import AddEducation from "./AddEducation";
import UploadProfile from "./UploadProfile";

const Dashboard = () => {
  const auth = useSelector((state) => state.auth);
  const { profile, isProfile } = useSelector((state) => state.profile);
  const [isEdit, setIsEdit] = useState(false);
  const [isexp, setIsExp] = useState(false);
  const [isedu, setIsEdu] = useState(false);
  const [isava, setIsAva] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allActions.authAction.fetchUser());
    dispatch(allActions.profileAction.getProfileUser());
  }, [dispatch]);

  if (!auth.isAuthenticated) {
    return <Redirect to="/login" />;
  }

  const onShow = (cpn) => {
    if (cpn === "isEdit") {
      setIsEdit(!isEdit);
    } else if (cpn === "isexp") {
      setIsExp(!isexp);
    } else if (cpn === "isedu") {
      setIsEdu(!isedu);
    }
    else if(cpn === "isava"){
      setIsAva(!isava)
    }
  };

  const onSubmit = (profile) => {
    dispatch(allActions.profileAction.createProfileUser(profile));
  };

  const onEditProfileHandler = (profile) => {
    dispatch(allActions.profileAction.createProfileUser(profile));
    setIsEdit(!isEdit);
  };

  const onAddExperienceHandler = (exp) => {
    dispatch(allActions.profileAction.addExperience(exp));
    setIsExp(!isexp);
  };

  const onAddEducationHandler = (edu) => {
    dispatch(allActions.profileAction.addEducation(edu));
    setIsEdu(!isedu);
  };

  const onDeleteExperience = (expId) => {
    dispatch(allActions.profileAction.deleteExperience(expId));
  };

  const onDeleteEducation = (eduId) => {
    dispatch(allActions.profileAction.deleteEducation(eduId));
  };

  const onUploadAvatarHandler = (file) => {
    dispatch(allActions.authAction.uploadAva(file))
    setIsAva(!isava)
  }

  return (
    <div>
      {!isProfile && (
        <CreateProfile onSubmit={(profile) => onSubmit(profile)} />
      )}
      {isProfile && !isEdit && !isexp && !isedu && !isava && (
        <ProfileUser
          onShow={(cpn) => onShow(cpn)}
          profile={profile}
          onDeleteExperience={onDeleteExperience}
          onDeleteEducation={onDeleteEducation}
        />
      )}
      {isEdit && (
        <EditProfile
          onShow={(cpn) => onShow(cpn)}
          onSubmit={(profile) => onEditProfileHandler(profile)}
          profile={profile}
        />
      )}
      {isexp && (
        <AddExperience
          onShow={(cpn) => onShow(cpn)}
          onAdd={onAddExperienceHandler}
        />
      )}
      {isedu && (
        <AddEducation
          onShow={(cpn) => onShow(cpn)}
          onAdd={onAddEducationHandler}
        />
      )}
      {isava && (
        <UploadProfile
          onShow={(cpn) => onShow(cpn)}
          onUp={onUploadAvatarHandler}
        />
      )}
    </div>
  );
};

export default Dashboard;
