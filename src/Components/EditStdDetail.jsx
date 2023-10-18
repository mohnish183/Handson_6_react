import React from "react";
import "./studentdesc.css";
import { useNavigate, useParams } from "react-router-dom";

import { useContext } from "react";
import Store from "../Store/Store";

const EditStdDetail = () => {
  const id = useParams().id;

  const contextData = useContext(Store);

  const navi = useNavigate();

  const updateObj = {
    name: contextData.stdData[id].name,
    age: contextData.stdData[id].age,
    course: contextData.stdData[id].course,
    batch: contextData.stdData[id].batch,
  };
  const changeHandler = (event) => {
    updateObj[event.target.name] = event.target.value;
  };
  const submit = () => {
    contextData.stdData[id] = updateObj;

    navi(-1);
  };
  return (
    <>
      <div className="std-container">
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={changeHandler}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Age"
          name="age"
          onChange={changeHandler}
        />{" "}
        <input
          type="text"
          placeholder="course"
          name="course"
          onChange={changeHandler}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Batch"
          name="batch"
          onChange={changeHandler}
        />{" "}
        <br />
      </div>
      <div className="std-btn">
        <button onClick={() => navi(-1)}>Cancel</button>
        <button onClick={() => submit()}> Submit</button>
      </div>
    </>
  );
};
export default EditStdDetail;
