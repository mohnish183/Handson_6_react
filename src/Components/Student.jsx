import React from "react";
import "./student.css";
import { Link, useNavigate } from "react-router-dom";





const Student = (props) => {
  // const [displayData] = useContext(Store);
  // console.log(displayData);
  // Store is a component

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
            <th>Change</th>
          </tr>
          {props.stdData.map((item, index) => {
            return (
              <tr key={index}>
                {/* {console.log(index)} */}
                <td className="name">{item.name}</td>
                <td>{item.age}</td>
                <td>{item.course}</td>
                <td>{item.batch}</td>

                <td>{<Link to="/EditStdDetail">Edit</Link>}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Student;
