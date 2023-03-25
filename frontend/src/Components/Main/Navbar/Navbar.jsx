import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import TextLogo from "../../Images/TextLogo.png";
import SmallLogo from "../../Images/SmallLogo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="rootDiv">
        <div>
          <img className="logoImage" src={SmallLogo} />
          <img className="logoImage" src={TextLogo} />
        </div>
        <br />
        <br />
        <div>
          <button className="navButton flights">Flights</button>
          <button className="navButton hotels">Hotels</button>
          <button className="navButton attractions">Attractions</button>
          <button className="navButton yourTrip">Your Trip</button>
        </div>
        <div className="grey-line"></div>
      </div>
    </>
  );
}

export default Navbar;
