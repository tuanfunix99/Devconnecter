import React, { useState } from "react";

const UploadProfile = (props) => {
  const [file, setFile] = useState(null);

  const onChangeHandler = (e) => {
    console.log(e.target.files[0])
    setFile(e.target.files[0]);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const data = new FormData()
    data.append('avatar', file)
    props.onUp(data);
  };

  return (
    <section className="container">
      <form onSubmit={onSubmitHandler} encType="multipart/form-data" className="form">
        <div className="form-group">
          <input
            onChange={onChangeHandler}
            type="file"
            placeholder="* School or Bootcamp"
            name="avatar"
            required
          />
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <button
          onClick={(cpn) => props.onShow("isava")}
          className="btn btn-light my-1"
        >
          Go Back
        </button>
      </form>
    </section>
  );
};

export default UploadProfile;
