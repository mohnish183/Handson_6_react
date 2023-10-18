import React from "react";
import "../App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Student from "../Components/Student";
import Contact from "../Components/Contact";
import Home from "../Components/Home";
import StudentDesc from "../Components/Student-Desc";
import EditStdDetail from "../Components/EditStdDetail";
import { useState } from "react";
import Store from "../Store/Store";

const RoutesCompo = () => {
  const [stuData, setStuData] = useState([
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
  ]);
  return (
    <BrowserRouter>
      <div className="link">
        {" "}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/student">Student</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/student"
          element={
            <Store.Provider
              value={{ stdData: stuData, setStdData: setStuData }}
            >
              <Student />
            </Store.Provider>
          }
        ></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route
          path="/Student-Desc"
          element={
            <Store.Provider
              value={{ stdData: stuData, setStdData: setStuData }}
            >
              <StudentDesc />
            </Store.Provider>
          }
        />

        <Route
          path="/EditStdDetail/:id"
          element={
            <Store.Provider
              value={{ stdData: stuData, setStdData: setStuData }}
            >
              <EditStdDetail />
            </Store.Provider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesCompo;
// browser part :- it combine the data of url and component . it take care of url part
// resposibility to represent UI :- Routes
