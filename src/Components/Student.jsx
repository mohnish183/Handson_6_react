import React from "react";
import "./student.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import Store from "../Store/Store";

const Student = () => {
  const ContextData = useContext(Store);

  const navigation = useNavigate();

  return (
    <>
      <div className="student-head">
        <h1>Student Details</h1>
        <button
          className="add-std-btn"
          onClick={() => {
            navigation("/Student-Desc");
          }}
        >
          Add new Student
        </button>
      </div>
      <div className="std-form">
        <table>
          <tr>
            <th className="name">Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Edit</th>
          </tr>
          {ContextData.stdData.map((item, index) => {
            return (
              <tr key={index}>
                <td className="name">{item.name}</td>
                <td>{item.age}</td>
                <td>{item.course}</td>
                <td>{item.batch}</td>

                <NavLink to={`/EditStdDetail/${index}`}>
                  <td>Edit</td>
                </NavLink>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Student;
