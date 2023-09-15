import React from "react";
import "./studentdesc.css";
import { Navigate, useNavigate } from "react-router-dom";
const EditStdDetail = () => {
  const navigation = useNavigate();
  return (
    <>
      <div className="std-container">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Age" />
        <input type="text" placeholder="Course" />
        <input type="text" placeholder="Batch" />
      </div>
      <div className="std-btn">
        <button onClick={() => navigation("/Student")}>Cancel</button>
        <button>Submit</button>
      </div>
    </>
  );
};

export default EditStdDetail;
