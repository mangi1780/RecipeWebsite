import HomePage from "./Components/HomePage/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import { history } from "./Helpers";
import Dinner from "./Components/Dinner/dinner";
import Breakfast from "./Components/Breakfast/breakfast";
import Lunch from "./Components/Lunch/lunch";
import Contactus from "./Components/Contactus/contactus";
import Aboutus from "./Components/AboutUs/aboutus";
import SideBar from "./Components/Sidebar/sidebar";


function App() {
  return (
    <React.StrictMode>
      <div className="App" id="outer-container">
        <Router history={history}>
        <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <center>
        <div id="page-wrap">
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route exact path="/dinner" element={<Dinner />} />
            <Route exact path="/breakfast" element={<Breakfast />} />
            <Route exact path="/lunch" element={<Lunch />} />
            <Route exact path="/contactus" element={<Contactus />} />
            <Route exact path="/about" element={<Aboutus />} />
          </Routes>
        </div>
        </center>
        </Router>
      </div>
    </React.StrictMode>
  );
}

export default App;
