import React, { useState, useEffect } from "react";

const EditProfile = (props) => {
  const [formData, setFormData] = useState({
    status: "",
    company: "",
    website: "",
    location: "",
    skills: "",
    githubusername: "",
    bio: "",
    youtube: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    instagram: "",
  });

  useEffect(() => {
    if (props.profile) {
      setFormData((pre) => {
        return {
          ...pre,
          status: props.profile.status,
          company: props.profile.company,
          website: props.profile.website,
          location: props.profile.location,
          skills: props.profile.skills,
          githubusername: props.profile.githubusername,
          bio: props.profile.bio,
          youtube: props.profile.social.youtube,
          twitter: props.profile.social.twitter,
          facebook: props.profile.social.facebook,
          linkedin: props.profile.social.linkedin,
          instagram: props.profile.social.instagram,
        };
      });
    }
  }, [props.profile]);

  const onChangeFormData = (e) => {
    setFormData((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.onSubmit(formData);
  };

  return (
    <section className="container">
      <h1 className="large text-primary">Create Your Profile</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Let's get some information to make your
        profile stand out
      </p>
      <small>* = required field</small>
      <form onSubmit={(e) => onSubmitHandler(e)} className="form">
        <div className="form-group">
          <select
            value={formData.status}
            name="status"
            onChange={(e) => onChangeFormData(e)}
          >
            <option value="">* Select Professional Status</option>
            <option value="Developer">Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Instructor">Instructor or Teacher</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option>
          </select>
          <small className="form-text">
            Give us an idea of where you are at in your career
          </small>
        </div>
        <div className="form-group">
          <input
            onChange={(e) => onChangeFormData(e)}
            type="text"
            placeholder="Company"
            name="company"
            value={formData.company}
          />
          <small className="form-text">
            Could be your own company or one you work for
          </small>
        </div>
        <div className="form-group">
          <input
            onChange={(e) => onChangeFormData(e)}
            type="text"
            placeholder="Website"
            name="website"
            value={formData.website}
          />
          <small className="form-text">
            Could be your own or a company website
          </small>
        </div>
        <div className="form-group">
          <input
            onChange={(e) => onChangeFormData(e)}
            type="text"
            placeholder="Location"
            name="location"
            value={formData.location}
          />
          <small className="form-text">
            City & state suggested (eg. Boston, MA)
          </small>
        </div>
        <div className="form-group">
          <input
            onChange={(e) => onChangeFormData(e)}
            type="text"
            placeholder="* Skills"
            name="skills"
            value={formData.skills}
          />
          <small className="form-text">
            Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
          </small>
        </div>
        <div className="form-group">
          <input
            onChange={(e) => onChangeFormData(e)}
            type="text"
            placeholder="Github Username"
            name="githubusername"
            value={formData.githubusername}
          />
          <small className="form-text">
            If you want your latest repos and a Github link, include your
            username
          </small>
        </div>
        <div className="form-group">
          <textarea
            onChange={(e) => onChangeFormData(e)}
            placeholder="A short bio of yourself"
            name="bio"
            value={formData.bio}
          ></textarea>
          <small className="form-text">Tell us a little about yourself</small>
        </div>

        <div className="my-2">
          <button type="button" className="btn btn-light">
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>

        <div className="form-group social-input">
          <i className="fab fa-twitter fa-2x"></i>
          <input
            onChange={(e) => onChangeFormData(e)}
            type="text"
            placeholder="Twitter URL"
            name="twitter"
            value={formData.twitter}
          />
        </div>

        <div className="form-group social-input">
          <i className="fab fa-facebook fa-2x"></i>
          <input
            onChange={(e) => onChangeFormData(e)}
            type="text"
            placeholder="Facebook URL"
            name="facebook"
            value={formData.facebook}
          />
        </div>

        <div className="form-group social-input">
          <i className="fab fa-youtube fa-2x"></i>
          <input
            onChange={(e) => onChangeFormData(e)}
            type="text"
            placeholder="YouTube URL"
            name="youtube"
            value={formData.youtube}
          />
        </div>

        <div className="form-group social-input">
          <i className="fab fa-linkedin fa-2x"></i>
          <input
            onChange={(e) => onChangeFormData(e)}
            type="text"
            placeholder="Linkedin URL"
            name="linkedin"
            value={formData.linkedin}
          />
        </div>

        <div className="form-group social-input">
          <i className="fab fa-instagram fa-2x"></i>
          <input
            onChange={(e) => onChangeFormData(e)}
            type="text"
            placeholder="Instagram URL"
            name="instagram"
            value={formData.instagram}
          />
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <button
          onClick={(cpn) => props.onShow("isEdit")}
          className="btn btn-light my-1"
        >
          Go Back
        </button>
      </form>
    </section>
  );
};

export default EditProfile;
