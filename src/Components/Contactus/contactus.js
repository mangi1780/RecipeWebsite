import React from "react";
import "./contactus.css";
import SearchBar from "../SearchBar/searchbar";

class Contactus extends React.Component{
    constructor(props){
        super(props);
        this.state={ }
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
    }
    onEmailChange(event) {
        this.setState({email: event.target.value})
    }
    onMessageChange(event) {
        this.setState({message: event.target.value})
    }

    render(){
        return(<div className="contact-page">           
            <div className="menubar">
            <div className="left"></div>
            <div className="middle"> <div className="menuitem"> <h1>Contact Us</h1></div> 
            <div className="right"></div>
            </div>      
        </div>
       <div className="form-container">
        <h2>Write your query here....</h2>
        <form id="contact-form" method="POST">
          <div className="form-group">
              <label htmlFor="name">Name : </label>
              <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
          </div>
          <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address : </label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
          </div>
          <div className="form-group">
              <label htmlFor="exampleInputMobileNo">Mobile No. : </label>
              <input placeholder="optional" type="phone" className="form-control" id="phone" aria-describedby="phoneHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
          </div>
          <div className="form-group">
              <label htmlFor="message">Message : </label>
              <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
        </div>);
    }
}

export default Contactus;