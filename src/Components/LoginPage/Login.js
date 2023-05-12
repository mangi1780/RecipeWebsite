import React from 'react';
import { Link } from 'react-router-dom';
import RegisterUser from '../UserRegisterPage/registerNewUser';
import { history } from '../../Helpers';


class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      submitted: false,
      status: "Online"
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnclick = this.handleOnclick.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    alert("Submit details clicked");
    this.setState({ username: "", password: "", submitted: true });
  }
  handleChange(e) {
    e.preventDefault();
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }
  handleOnclick(e) {
    alert("Register Clicked");
    history.push("/registeruser");
  }
  render() {
    const { username, password, submitted } = this.state;

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
        <link rel="icon" href="/img/icon.png" type="image/x-icon" />
        <main>
          <center>
            <div id="alignDiv">
              <div className="section" />
              <div className="section" />
              <div className="section" />
            </div>
            <div className="container float">
              <div
                id="loginContainer"
                className="z-depth-1 grey lighten-4 row"
                style={{
                  display: "inline-block",
                  padding: "32px 48px 0px 48px",
                  border: "1px solid #EEE",
                }}
              >
                <div>
                  <h5 style={{ fontWeight: 'bold' }}>Chatter</h5>
                </div>
                <form name="form" onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="col s12" />
                  </div>
                  <div id="userCredentials">
                    <div className="row">
                      <div className="input-field col s12">
                        <input
                          type="text"
                          className="form-control"
                          name="username"
                          placeholder="Username"
                          value={username}
                          onChange={this.handleChange}
                        />
                        <em htmlFor="username" className="invalid" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          value={password}
                          placeholder="Password"
                          required
                          onChange={this.handleChange}
                        />
                      </div>
                      <em
                        htmlFor="password"
                        className="invalid left-alert"
                        id
                      />
                    </div>

                    <div className="row">
                      <button
                        id="nextBtn"
                        type="submit"
                        name="next"
                        className="col s12 btn"
                      >
                        Submit
                      </button>

                      <em
                        for="password"
                        className="invalid left-alert"
                        id="errormessage"
                      >
                        Server
                        {" " + this.state.status}
                      </em>
                    </div>
                    <div className='row'>Don't have account? <Link Component={RegisterUser} to={{ pathname: "/registeruser" }}><span hover="true" onClick={this.handleOnclick} style={{ color: 'blue' }}>Register</span> </Link></div>
                  </div>
                </form>
              </div>
            </div>
          </center>
          <div className="section" />
          <div className="section" />
        </main>
      </div>
    );
  }
}

export default LoginPage;