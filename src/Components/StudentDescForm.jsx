import React, { useState } from "react";
import "./studentdesc.css";
import { useNavigate } from "react-router-dom";
const StudentDescForm = (props) => {
  const navigation = useNavigate();
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [enteredCourse, setEnteredCourse] = useState("");
  const [enteredBatch, setEnteredBatch] = useState("");

  const inputChangeHandler = (identifier, value) => {
    if (identifier === "name") {
      setEnteredName(value);
    } else if (identifier === "number") {
      setEnteredAge(value);
    } else if (identifier === "course") {
      setEnteredCourse(value);
    } else {
      setEnteredBatch(value);
    }
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const studentData = {
      name: enteredName,
      age: enteredAge,
      course: enteredCourse,
      batch: enteredBatch,
    };
    props.onSaveStudentData(studentData);
    setEnteredName("");
    setEnteredAge("");
    setEnteredCourse("");
    setEnteredBatch("");
    navigation("/Student");
  };
  return (
    <>
      <div className="std-container">
        <input
          type="text"
          value={enteredName}
          placeholder="Name"
          onChange={(event) => {
            inputChangeHandler("name", event.target.value);
          }}
        />
        <input
          type="text"
          value={enteredAge}
          placeholder="Age"
          onChange={(event) => {
            inputChangeHandler("number", event.target.value);
          }}
        />
        <input
          type="text"
          value={enteredCourse}
          placeholder="Course"
          onChange={(event) => {
            inputChangeHandler("course", event.target.value);
          }}
        />
        <input
          type="text"
          value={enteredBatch}
          placeholder="Batch"
          onChange={(event) => {
            inputChangeHandler("batch", event.target.value);
          }}
        />
      </div>
      <div className="std-btn">
        <button onClick={() => navigation("/Student")}>Cancel</button>
        <button onClick={submitHandler}>Submit</button>
      </div>
    </>
  );
};

export default StudentDescForm;
