import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TextLogo from "../../Images/TextLogo.png";
import SmallLogo from "../../Images/SmallLogo.png";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation().pathname;

  console.log(location.pathname);

  function handleFlightsNavigation(event) {
    event.preventDefault();
    navigate("/flights");
  }

  function handleHotelNavigation(event) {
    event.preventDefault();
    navigate("/hotels");
  }

  function handleAttractionNavigation(event) {
    event.preventDefault();
    navigate("/attractions");
  }

  function handleSummaryNavigation(event) {
    event.preventDefault();
    navigate("/summary");
  }
  function handleHomeNavigation(event) {
    event.preventDefault();
    navigate("/home");
  }
  return (
    <>
      <div className="rootDivNavBar">
        <div onClick={handleHomeNavigation}>
          <img className="logoImage" src={SmallLogo} />
          <img className="logoImage" src={TextLogo} />
        </div>
        <br />
        <br />
        <div>
          <button
            onClick={handleFlightsNavigation}
            className={`navButton flights ${
              location === "/flights" ? "active" : ""
            }`}
          >
            Flights
          </button>
          <button
            onClick={handleHotelNavigation}
            className={`navButton hotels ${
              location === "/hotels" ? "active" : ""
            }`}
          >
            Hotels
          </button>
          <button
            onClick={handleAttractionNavigation}
            className={`navButton attractions ${
              location === "/attractions" ? "active" : ""
            }`}
          >
            Attractions
          </button>
          <button
            onClick={handleSummaryNavigation}
            className={`navButton yourTrip ${
              location === "/summary" ? "active" : ""
            }`}
          >
            Your Trip
          </button>
        </div>
        <div>
          <hr
            style={{
              background: "grey",
              color: "grey",
              borderColor: "grey",
              height: "1.25px",
              width: "250px",
              marginLeft: "22px",
            }}
          />
        </div>
        <div className="buttonTextGrey">
          <button className="bottomButtons">Vacation Summary</button>
          <br />
          <br />
          <button className="bottomButtons">Budget Calculator</button>
          <br />
          <br />
          <button className="bottomButtons">Savings Plan</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
