import React from "react";
import { NavLink } from "react-router-dom";
import SplitPane from "react-split-pane";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBar from "../Sidebar/sidebar";
import './css/index.css';
import image from "./img/Recipe-Website-Themes.webp";

const Buttons = styled.button`
cursor: pointer;
background-color: grey;
border: 1px solid rgba(0, 0, 0, 0.05);
outline: none;
height: 6vh;
width: 7.7vw;
font-size: 3.5vh;
color: #00060c;
fontweight: bold;
`;

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div id="outer-container" style={{backgroundImage:{image}}}>
                <div className="menubar">
                    <div className="left"></div>
                    <div className="middle"> <div className="menuitem"> <h1>Welcome to Recipe Mania</h1></div>
                        <div className="right"></div>
                    </div>
                </div>            
                <div id="page-wrap">
                    <h1>Welcome to Recipe Mania</h1>
                </div>
            </div>
        );
    }
}
export default HomePage;