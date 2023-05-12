import React from "react";
import SearchBar from "../SearchBar/searchbar";
import './lunch.css'

class Lunch extends React.Component{
    constructor(){
        super();
        this.state={

        }
    }
    

    render(){
        return(<>
        <div className="menubar">
            <div className="left"></div>
            <div className="middle"> <div className="menuitem"> <h1>Lunch</h1></div> </div>
           <div className="right"><div className="menuitem"><SearchBar/></div></div>              
        </div>
        </>);
    }
}
export default Lunch;