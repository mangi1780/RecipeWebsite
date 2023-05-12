import React from "react";
import './dinner.css';
import SearchBar from "../SearchBar/searchbar";

class Dinner extends React.Component{
    constructor(){
        super();
        this.state={

        }
    }
    

    render(){
        return(<>
        <div className="menubar">
            <div className="left"></div>
            <div className="middle"> <div className="menuitem"> <h1>Dinner</h1></div> </div>
           <div className="right"><div className="menuitem"><SearchBar/></div></div>              
        </div>
        </>);
    }
}

export default Dinner;