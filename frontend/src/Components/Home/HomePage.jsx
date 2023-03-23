// I recommend using react bootstrap for easier styling and formatting
import React, { Component } from "react";
import "./HomePage.css";
import SmallLogo from "../Images/SmallLogo.png";
import TextLogo from "../Images/TextLogo.png";
import ImageOverlay from "../Images/imageOverlay.png";
import ImageUnderlay from "../Images/imageUnderlay.png";

// React router to route to different pages from the homepage
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import Login from "../Login/LoginPage.js";
import Signup from "../Signup/SignupPage.jsx";
import Main from "../Main/Navbar/Navbar.js";

// function App(){
//   return (
//     <div>
//       <Routes>
//         <Route exact path="/home" component={HomePage} />
//       </Routes>
//     </div>
//   )
// }
function HomePage() {
  //const { all_Work1, all_Work2, spanText1, spanText2, spanText3, spanText4, spanText5, maskGroup1, maskGroup2 } = props;

  return (
    <div className="container-center-horizontal">
      <div className="macbook-pro-14-1 screen">
        <div className="flex-row worksans-bold-swamp-16px">
          <img className="all_work" src={SmallLogo} alt="All_work" />
          <img className="all_work-1" src={TextLogo} alt="All_work" />
          <div className="log-in valign-text-middle">
            <span>
              <button className="worksans-bold-swamp-16px homeButtons">Log in</button>
            </span>
          </div>
          <div className="sign-up valign-text-middle">
            <span>
              <button className="worksans-bold-swamp-16px homeButtons">Sign up</button>
            </span>
          </div>
        </div>
        <div className="flex-row-1">
          <div className="flex-col">
            <h1 className="title valign-text-middle worksans-bold-swamp-50px">
              <span>
                <span className="worksans-bold-swamp-50px">
                  Plan your trip with ease
                </span>
              </span>
            </h1>
            <p className="pick-the-best-flight worksans-normal-swamp-24px">
              <span className="worksans-normal-swamp-24px">
                Pick the best flights, hotels, and activities for your trip as
                well as begin saving. All in one spot!",
              </span>
            </p>
            <div className="overlap-group">
              <div className="start-here valign-text-middle worksans-semi-bold-white-18px">
                <span>
                  <button className="worksans-semi-bold-white-18px homeButtons">
                    Start here
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div className="mask-group-container">
            <img className="mask-group" src={ImageUnderlay}/>
            <img className="mask-group-1" src={ImageOverlay}/>
          </div>
        </div>
      </div>
    </div>
  );

  // Create proper return function to route to the right page based on link clicks
  // return (
  //   <>
  //   <div>

  //   <h1>Home page</h1>

  //   </div>
  /*{ <Router>
        <div className="home-page">
        <p>Hello!</p>
        <p><link rel="Login" href="/login"/></p>
        <link rel="Signup" href="/signup"/>
        <link rel="Main" href="/main">Link</link>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/main" element={<Main />} />
          </Routes>
        </div>
      </Router> */
}

export default HomePage;
