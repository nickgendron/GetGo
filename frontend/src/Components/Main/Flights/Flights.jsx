import React from "react";
import Navbar from "../Navbar/Navbar";
import PlaneIcon from "../../Images/blackPlaneIcon.png";
import "./Flights.css";
function Flights() {
  return (
    <>
      <div className="flightsRootDiv">
        <div className="navBarComponent">
          <Navbar />
        </div>
        <div className="flightsContent">
          <div className="flightsHeader">
            <h1 className="flightsToCity">Flights to [city, country]: </h1>
            <hr
              style={{
                background: "black",
                color: "black",
                borderColor: "black",
                height: "4px",
                width: "93%",
                marginLeft: "3%",
              }}
            />
          </div>

          {/* STARTING HERE WE WOLD NEED TO HAVE LOGIC TO MAKE BACKEND CALLS */}
          <div className="reusableFlightDisplayRoot">
            <div className="gridContainer">
              <div className="gridItem">
                <img src={PlaneIcon} className="planeIcon" />
                <h5 className="flightPathFont">MSY to SYD</h5>
                <hr
                  style={{
                    background: "black",
                    color: "black",
                    borderColor: "black",
                    height: "1px",
                    width: "93%",
                    marginLeft: "3%",
                  }}
                />

                <div className="repeatableSegmentDiv">
                  <div className="leftBoxOutgoing">
                    <p className="airlineText">United Airlines</p>
                    <div className="infoStack">
                      <button className="whiteAirportBuble">MSY</button>
                      <br />
                      <br />
                      <br />
                      <br />
                      <p className="airportText">Tue, Aug. 1</p>
                      <p className="airportText airportExtra">6:00 AM</p>
                    </div>
                    <div className="arrowDiv">
                  <p>Hello</p>
                </div>
                  </div>
                </div>

                
              </div>

              <div className="gridItem">
                <img src={PlaneIcon} className="planeIcon" />
                <h5 className="flightPathFont">SYD to MSY</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Flights;
