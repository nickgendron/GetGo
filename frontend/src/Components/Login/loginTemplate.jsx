import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import image from "../Images/largeLogo.jpg";
import textImage from "../Images/largerTextLogo.png";
import axios from 'axios';


function LoginTemplate() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const url = `http://127.0.0.1:8080/api/user/login?email=${email}&password=${password}`;

    axios.get(url)
      .then((response) => {
        if(response.data){
          navigate("/details");
        }
        else{
          setError("Invalid email/password");
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
      <img src={image} className="imageLogin" alt=" " />
      <img src={textImage} className="textLogoLogin" alt=" " />

      <br/><br/><br/><br/><br/>
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
              <button className="buttonlogin" type="submit" onClick={handleSubmit}>
                Login
              </button>
              <br></br>
              <a className="centerText"  >
                {" "}
                Forgot password?{" "}
              </a>
              <br></br>
             
              {error && <div className="errorMessage">{error}</div>}

        </form>
        <div className="rightSideDiv">
          <h1 className="newHereText">New Here?</h1>
          <br></br>
          <button onClick={handleSignUpNavigation} type="submit" className="buttonsignup">Sign Up</button>
        </div>
        <div className="box"></div>
      </div>
    </>
  );
}

export default LoginTemplate;
