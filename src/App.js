import "./App.css";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Student from "./Components/Student";
import Contact from "./Components/Contact";
import StudentDesc from "./Components/Student-Desc";

import { useState } from "react";
import EditStdDetail from "./Components/EditStdDetail";
const DummyData = [
  {
    id: "1",
    name: "john",
    age: 26,
    course: "MERN",
    batch: "October",
    url: "https://www.google.com/",
  },
  {
    id: "2",
    name: "Doe",
    age: 26,
    course: "MERN",
    batch: "November",
    url: "https://www.google.com/",
  },
  {
    id: "3",
    name: "Doe",
    age: 26,
    course: "MERN",
    batch: "September",
    url: "https://www.google.com/",
  },
  {
    id: "4",
    name: "Biden",
    age: 26,
    course: "MERN",
    batch: "January",
    url: "https://www.google.com/",
  },
  {
    id: "5",
    name: "Barar",
    age: 22,
    course: "MERN",
    batch: "October",
    url: "https://www.google.com/",
  },
  {
    id: "6",
    name: "Elent",
    age: 27,
    course: "MERN",
    batch: "August",
    url: "https://www.google.com/",
  },
  {
    id: "7",
    name: "Rogar",
    age: 22,
    course: "MERN",
    batch: "June",
    url: "",
  },
];
function App() {
  const [stdDetail, setStdDetail] = useState(DummyData);
  const addStudentHandler = (stddata) => {
    setStdDetail((prevstddata) => {
      return [...prevstddata, stddata];
    });
  };
  return (
    <BrowserRouter>
      <div className="link">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Student">Student</NavLink>
        <NavLink to="/Contact">Contact Us</NavLink>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Student" element={<Student stdData={stdDetail} />} />
        <Route path="/Contact" element={<Contact />} />
        <Route
          path="/Student-Desc"
          element={<StudentDesc onAddStudent={addStudentHandler} />}
        />
        <Route path="/EditStdDetail" element={<EditStdDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
