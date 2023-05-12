
import React from "react";
import {Link} from 'react-router-dom';

class RegisterUser extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      emailAddress: "",
      passsword: "",
      submitted: false,
      error: ""
    }
    this.handleEmail = this.handleEmail.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmail(e) {
    e.preventDefault();
    this.setState({ emailAddress: e.target.value });

  }

  handlePassword(e) {
    e.preventDefault();
    this.setState({ passsword: e.target.value })

  }

  handleName(e) {
    e.preventDefault();
    this.setState({ name: e.target.value });
  }
  // Handling the form submission
  handleSubmit = (e) => {
    debugger;
    let { name, emailAddress, password } = this.state;
    e.preventDefault();
    if (name === '' || emailAddress === '' || password === '') {
      //setError(true);
      alert("Please fill all the required values");
    } else {
      //setSubmitted(true);
      //setError(false);
      alert("are you sure ??");
      this.setState({
        name: "",
        passsword: "",
        emailAddress: "",
        submitted: false
      });
    }
  };

  successMessage = () => {
    let { name, submitted } = this.state;
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };

  errorMessage = () => {
    let error = this.state.error;
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  render() {
    let { name, emailAddress, passsword, submitted } = this.state;

    return (
      <div>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/css/materialize.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          media="screen"
          href="public/css/loginStyling.css"
        />
        {/* <link rel="icon" href="/img/icon.png" type="image/x-icon" /> */}
        <main>
          <center>
            <div id="alignDiv">
              <div className="section" />
              <div className="section" />
              <div className="section" />
            </div>
            <div id="userdetailContainer"
              className="z-depth-1 grey lighten-4 row"
              style={{
                display: "inline-block",
                padding: "32px 48px 0px 48px",
                border: "1px solid #EEE",
              }}>


              <div className="container float" >
                <div>
                 <h4>User Registration</h4> 
                </div>
                {/* Calling to the methods */}
                <div className="messages">
                  {this.errorMessage}
                  {this.successMessage}
                </div>

                <form className="form">
                  {/* Labels and inputs for form data */}
                  <div className="row">
                    <div className="col s12" />
                  </div>
                  <div className="userCredentials">

                    <div className="row">
                      {/* <label className="label">Name</label> */}
                      <input placeholder="Name" onChange={this.handleName} className="input"
                        value={name} type="text" />
                    </div>

                    <div className="row">
                      <input placeholder="Email" onChange={this.handleEmail} className="input"
                        value={emailAddress} type="email" /></div>

                    <div className="row">
                      <input placeholder= "Password" onChange={this.handlePassword} className="input"
                        value={passsword} type="password" />
                    </div>

                    <div className="row">
                      <button onClick={this.handleSubmit} className="btn" type="submit">
                        Submit
                      </button>
                    </div></div>
                </form>
              </div>
            </div>

          </center>
        </main>

      </div>
    );
  }

}

export default RegisterUser;