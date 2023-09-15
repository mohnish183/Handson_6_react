import React from "react";
import "./studentdesc.css";

import StudentDescForm from "./StudentDescForm";
function StudentDesc(props) {
  const saveStudentDataHandler = (enteredStudentData) => {
    const studentData = {
      ...enteredStudentData,
      id: Math.random().toString(),
    };
    console.log(studentData);
    props.onAddStudent(studentData);
  };
  return (
    <div>
      <StudentDescForm onSaveStudentData={saveStudentDataHandler} />
    </div>
  );
  // const navigation = useNavigate();
  // return (
  //   <>
  //     <div className="std-container">
  //       <input type="text" placeholder="Name" />
  //       <input type="text" placeholder="Age" />
  //       <input type="text" placeholder="Course" />
  //       <input type="text" placeholder="Batch" />
  //     </div>
  //     <div className="std-btn">
  //       <button onClick={() => navigation("/Student")}>Cancel</button>
  //       <button>Submit</button>
  //     </div>
  //   </>
  // );
}

export default StudentDesc;
