import React from "react";
import Navbar from "../Navbar/Navbar";
import PlaneIcon from "../../Images/blackPlaneIcon.png";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./Flights.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  width: "100%",
  border: "none",
  font: "work sans",
  color: theme.palette.text.secondary,
}));

function flightCards() {
  return (
    <div className="reusableFlightDisplayRoot">
      <div className="outgoingFlightInfo">
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
      </div>
      <div className="gridContainer">
        <div className="gridItem">
          <div className="topLine">
            <div> {table()}</div>
            {/* <p className="airlineText">Delta Airlines &nbsp;&nbsp;  Flight</p> */}
            {/* <p> Flight 192</p>
            <div className="sideBySideButtons">
              <button className="whiteAirportBuble">MSY</button>
              <button className="blueAirportBuble buttonRight">SYD</button>
            </div>
            <div className="textLineDiv">
            <p className="airportTextLeft">
              Tue, Aug. 1 <br /> 6:00 AM
            </p>
            <p className="airportTextRight">
              Tue, Aug. 1 <br /> 6:00 AM
            </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
function table() {
  return (
    <table>
      <tbody>
        <tr>
          <td>Korean Air</td>
          <td></td>
        </tr>
        <tr>
          <td>
            <button className="whiteAirportBuble">MSY</button>
          </td>
          <td>
            <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>
          </td>
          <td>
            <p></p>
          </td>
          <td>
            <button className="blueAirportBuble">SYD</button>
          </td>
        </tr>
        <tr>
          <td>Tue, Aug 1</td>
          <td></td>
          <td> </td>
          <td>Tue, Aug 1</td>
        </tr>
        <tr>
          <td>6:30 am</td>
          <td></td>
          <td></td>
          <td>8:26am</td>
        </tr>
      </tbody>
    </table>
  );
}

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
          <div> {flightCards()} </div>
        </div>
      </div>
    </>
  );
}
export default Flights;
{
  /* <div className="reusableFlightDisplayRoot">
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

                <div className="repeatableSegmentDivContainer">
                  <div className="leftBoxOutgoing">
                    <p className="airlineText">United Airlines</p>
                    <button className="whiteAirportBuble">MSY</button>
                    <br />
                    <br />
                    <p className="airportText">Tue, Aug. 1 <br/> 6:00 AM</p>
                  </div>
                </div>
              </div> */
}
