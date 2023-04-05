import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import image from "../Images/largeLogo.jpg";
import textImage from "../Images/largerTextLogo.png";
import axios from 'axios';


function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const url = `http://127.0.0.1:8080/api/user/login?email=${email}&password=${password}`;

    axios.get(url)
      .then((response) => {
        // Handle the response data here
       // console.log(response.data);
        if(response.data){
          navigate("/home");
        }
        else{
          setError("Invalid email/password");
         // return <div>{error}</div>;
        }
      })
      .catch((error) => {
        // Handle the error here
        console.error(error);
      });
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSignUpNavigation(event){
    event.preventDefault();
    navigate("/signup");
  }

  return (
    <>
      <img src={image} className="imageLogin" />
      <img src={textImage} className="textLogoLogin" />

      <br/><br/><br/><br/>
      <div className="container">
        {/* <img src={image} className="imageLogin" /> */}
        <form className="loginArea" onSubmit={handleSubmit}>
              <h1 className="welcomeText">
                <strong>Login to Your Account</strong>
              </h1>
              <br></br>
              <input
                className="inputLabel"
                type="text"
                placeholder="Email"
                name="username"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <br></br>
              <input
                className="inputLabel"
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <br></br>
              <button className="button" type="submit" onClick={handleSubmit}>
                Login
              </button>
              <br></br>
              <a className="centerText" href="#">
                {" "}
                Forgot password?{" "}
              </a>
              <br></br>
             
              {error && <div className="errorMessage">{error}</div>}

        </form>
        <div className="rightSideDiv">
          <h1 className="newHereText">New Here?</h1>
          <br></br>
          <button onClick={handleSignUpNavigation} type="submit" className="button">Signup</button>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
