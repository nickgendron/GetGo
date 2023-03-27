import React from "react";
import Navbar from "../Navbar/Navbar";
import PlaneIcon from "../../Images/blackPlaneIcon.png";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import arrowIcon from "../../Images/right-arrow.png";

import "./SignupPage.css";




function flightCards() {
  return (
    //   <div className="grid-container">
    //   <div className="grid-item grid-item-1">Div 1</div>
    //   <div className="grid-item grid-item-2">Div 2</div>
    //   <div className="grid-item grid-item-3">Div 3</div>
    //   <div className="grid-item grid-item-4">Div 4</div>
    // </div>
    <>
      <div className="grid-wrapper">
        <div className="grid-container grid-container-left">
          <div className="grid-item grid-item-1">
            <p className="flightDurationText">3 hours and 45 minutes</p>
          </div>
          <div className="grid-item grid-item-2">
            <p>Korean Air</p>
            <button className="blueAirportBubbleNew">SYD</button>
            <p>Tue, Aug 1 <br/> <strong>6:30 am</strong></p>

          </div>
          <div className="grid-item grid-item-3">
            {/* <img className="arrowImage" src={arrowIcon}></img> */}
            to
          </div>
          <div className="grid-item grid-item-4">
            <p>Korean Air</p>
            <button className="whiteAirportBubbleNew">MSY</button>
            <br/>
            <p>Tue, Aug 1 <br/> <strong>6:30 am</strong></p>
          </div>
        </div>
      </div>
    </>
  );
}
// 

function Signup() {
  return (
    <>
      <div className="navBarComponent">
        <Navbar />
      </div>

      <div className="flightsContent">
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
        {/* STARTING HERE WE WOLD NEED TO HAVE LOGIC TO MAKE BACKEND CALLS */}
        <div className="divThatHoldsFlightCards">
          {flightCards()}
          
          {flightCards()}
          
          {flightCards()}


        </div>
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