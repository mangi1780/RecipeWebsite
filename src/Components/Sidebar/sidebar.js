import React from "react";
import { slide as Menu } from 'react-burger-menu';
import "./sidebar.css";

class SideBar extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Menu>
                    <a style={{ fontSize: "3.5vh" }} className="menu-item" href="/">
                        Home
                    </a>

                    <a style={{ fontSize: "3.5vh" }} className="menu-item" href="/aboutus">
                        About US
                    </a>

                    <a style={{ fontSize: "3.5vh" }} className="menu-item" href="/breakfast">
                        BreakFast
                    </a>

                    <a style={{ fontSize: "3.5vh" }} className="menu-item" href="/lunch">
                        Lunch
                    </a>

                    <a style={{ fontSize: "3.5vh" }} className="menu-item" href="/dinner">
                        Dinner
                    </a>

                    <a style={{ fontSize: "3.5vh" }} className="menu-item" href="/register">
                        Register Recipe
                    </a>
                    <a style={{ fontSize: "3.5vh" }} className="menu-item" href="/contactus">
                        Contact Us
                    </a>
                </Menu>
            </div>
        );
    }
}

export default SideBar;