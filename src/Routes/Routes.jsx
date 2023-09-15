import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Student from "../Components/Student";
import Contact from "../Components/Contact";
import Home from "../Components/Home";
import { useState } from "react";
import Store from "../Store/Store";

const RoutesCompo = () => {
  const [stuData, setStuData] = useState([
    { name: "john", age: 26, course: "MERN", batch: "October" },

    { name: "Doe", age: 26, course: "MERN", batch: "October" },

    { name: "Biden", age: 26, course: "MERN", batch: "October" },
  ]);
  return (
    <div>
      <BrowserRouter>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/student">Student</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/student"
            element={
              <Store.Provider value={{ stuData, setStuData }}>
                <Student />
              </Store.Provider>
            }
          ></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RoutesCompo;
// browser part :- it combine the data of url and component . it take care of url part
// resposibility to represent UI :- Routes
