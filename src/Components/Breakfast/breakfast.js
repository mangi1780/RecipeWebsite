import React from "react";
import RCard from "../RecipeCard/recipecard";
import SearchBar from "../SearchBar/searchbar";
import './index.css'

const breakfastList = [
    {
        "name" : "Samosa",
        "description" : "Amazing in test khaiye or kho jaiye",
        "state" : "Rajasthan",
        "Rating" : 4.5
    },
    {
        "name" : "Kachori",
        "description" : "Test Lajawab",
        "state" : "Rajasthan",
        "Rating" : 4.9
    }
];

class Breakfast extends React.Component{
    constructor(){
        super();
        this.state={

        }
    }
    

    render(){
        return(<>

        <div className="menubar">
            <div className="left"></div>
            <div className="middle"> <div className="menuitem"> <h1>BreakFast</h1></div> </div>
           <div className="right"><div className="menuitem"><SearchBar/></div></div>              
        </div>
        <div>
            <RCard/>
        </div>
       
        </>);
    }
}

export default Breakfast;