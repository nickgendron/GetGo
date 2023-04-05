import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import SegmentWrapper from "../Flights/FlightCard/SegmentWrapper";
import "./Summary.css";

export default function Summary() {
  return (
    <>
       <div className="navBarComponent">
        <Navbar />
      </div>

      <div className="flightsContent">
        <h1 className="flightsToCity">Overall trip for: link needed </h1>
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
                <SegmentWrapper />

        </div>

    </>
  );
}
