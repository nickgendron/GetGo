import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TextLogo from "../../Images/TextLogo.png";
import SmallLogo from "../../Images/SmallLogo.png";
import "./Navbar.css";



function Navbar() {
  const navigate = useNavigate();

  function handleFlightsNavigation(event){
    event.preventDefault();
    navigate("/flights");
  }

  function handleHotelNavigation(event){
    event.preventDefault();
    navigate("/hotels");
  }

  function handleAttractionNavigation(event){
    event.preventDefault();
    navigate("/attractions");
  }


  function handleSummaryNavigation(event){
    event.preventDefault();
    navigate("/summary");
  }
  return (
    <>
      <div className="rootDivNavBar">
        <div>
          <img className="logoImage" src={SmallLogo} />
          <img className="logoImage" src={TextLogo} />
        </div>
        <br />
        <br />
        <div>
          <button onClick={handleFlightsNavigation} className="navButton flights">Flights</button>
          <button onClick={handleHotelNavigation} className="navButton hotels">Hotels</button>
          <button onClick={handleAttractionNavigation} className="navButton attractions">Attractions</button>
          <button onClick={handleSummaryNavigation} className="navButton yourTrip">Your Trip</button>
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
            <br/>
            <br/>
            <button className="bottomButtons">Budget Calculator</button>
            <br/>
            <br/>
            <button className="bottomButtons">Savings Plan</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
