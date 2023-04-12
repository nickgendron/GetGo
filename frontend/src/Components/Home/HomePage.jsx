// I recommend using react bootstrap for easier styling and formatting
import React from "react";
import "./HomePage.css";
import SmallLogo from "../Images/SmallLogo.png";
import TextLogo from "../Images/TextLogo.png";
import ImageOverlay from "../Images/imageOverlay.png";
import ImageUnderlay from "../Images/imageUnderlay.png";
import { useNavigate } from "react-router-dom";

// React router to route to different pages from the homepage

function HomePage() {
  const navigate = useNavigate();

  function handleButtonClick(buttonType) {
    if (buttonType === "sign-in") {
      navigate("/"); // Replace "/login" with the URL path of your login page
    } else if (buttonType === "sign-up") {
      navigate("/signup"); // Replace "/signup" with the URL path of your sign up page
    } else if (buttonType === "begin") {
      navigate("/login"); // Replace "/signup" with the URL path of your sign up page
    }
  }

  //const { all_Work1, all_Work2, spanText1, spanText2, spanText3, spanText4, spanText5, maskGroup1, maskGroup2 } = props;

  return (
    <div className="container-center-horizontal">
      <div className="macbook-pro-14-1 screen">
        <div className="flex-row worksans-bold-swamp-16px">
          <br />
          <br />
          <img className="all_work" src={SmallLogo} alt="All_work" />
          <img className="all_work-1" src={TextLogo} alt="All_work" />
          <div className="log-in valign-text-middle">
            <span>
              {/* <button
                onClick={() => handleButtonClick("sign-in")}
                className="worksans-bold-swamp-16px homeButtons"
              >
                Log in
              </button> */}
            </span>
          </div>
          <div className="sign-up valign-text-middle"></div>
        </div>
        <div className="flex-row-1">
          <div className="flex-col">
            <h1 className="title valign-text-middle worksans-bold-swamp-50px">
              <span>
                <span className="worksans-bold-swamp-50px">
                  Get Going with GetGo!
                </span>
              </span>
            </h1>
            <p className="pick-the-best-flight worksans-normal-swamp-24px">
              <span className="worksans-normal-swamp-24px">
                Plan your dream vacation with the click of a button. Easily
                compare flight and hotel prices across a variety of
                destinations. Get ready to Get Going!
              </span>
            </p>
            <div>
              <button
                onClick={() => handleButtonClick("begin")}
                type="submit"
                className="overlap-group"
              >
                {" "}
                Get Started{" "}
              </button>
            </div>
          </div>
          <div className="mask-group-container">
            <img className="mask-group" src={ImageUnderlay} />
            <img className="mask-group-1" src={ImageOverlay} />
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
