import Navbar from "../Navbar/Navbar";
import PlaneIcon from "../../Images/blackPlaneIcon.png";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import arrowIcon from "../../Images/right-arrow.png";


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image from "../../Images/largeLogo.jpg";
import textImage from "../../Images/largerTextLogo.png";
import axios from 'axios';


import "./SignupPage.css";






function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const url = `http://127.0.0.1:8080/api/user/add?firstName=${firstName}&lastName=${lastName}&email=${email}&password=${password}`;

    console.log(url)
    axios.post(url)
      .then((response) => {
        // Handle the response data here
        console.log(response.data);
        navigate("/home");
      })
      .catch((error) => {
        // Handle the error here
        console.error(error);
      });
  }

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }
  function handleLastNameChange(event) {
    setlastName(event.target.value);
  }
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
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
                <strong>Sign-up</strong>
                <br/><br/>
              </h1>
              <input
                className="inputLabel"
                type="text"
                placeholder="First Name"
                name="username"
                value={firstName}
                onChange={handleFirstNameChange}
                required
              /> <br/>
                 <input
                className="inputLabel"
                type="text"
                placeholder="Last Name"
                name="username"
                value={lastName}
                onChange={handleLastNameChange}
                required
              />
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
                Join now
              </button>
              <br></br>
        </form>
        </div>
    </>
  );
}

export default Signup;


//function table() {
  //   return (
  //     <table>
  //       <tbody>
  //         <tr>
  //           <td>Korean Air</td>
  //           <td></td>
  //         </tr>
  //         <tr>
  //           <td>
  //             <button className="whiteAirportBuble">MSY</button>
  //           </td>
  //           <td>
  //             <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>
  //           </td>
  //           <td>
  //             <p></p>
  //           </td>
  //           <td>
  //             <button className="blueAirportBuble">SYD</button>
  //           </td>
  //         </tr>
  //         <tr>
  //           <td>Tue, Aug 1</td>
  //           <td></td>
  //           <td> </td>
  //           <td>Tue, Aug 1</td>
  //         </tr>
  //         <tr>
  //           <td>6:30 am</td>
  //           <td></td>
  //           <td></td>
  //           <td>8:26am</td>
  //         </tr>
  //       </tbody>
  //     </table>
  //   );
  // }