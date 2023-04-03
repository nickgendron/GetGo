import React, { Component } from "react";

import Navbar from "../Navbar/Navbar";
import GridCardAttractions from "../GridCardAttrications/GridCardAttrications";
import './Attractions.css';

function Attractions()  {
    return (
        <>
          <div className="navBarComponent">
            <Navbar />
          </div>
          <div className="hotelsContent">
            <p className="hotelsInCity">Attrications in Sydney, Australia! </p>
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
            <div style={{ display:'flex', flexDirection: 'column'}}>
              {[...Array(10)].map((_, i) => (
                <GridCardAttractions key={i} />
              ))}
            </div>
    
            {/* STARTING HERE WE WOLD NEED TO HAVE LOGIC TO MAKE BACKEND CALLS */}
          </div>
        </>
      );
}
export default Attractions;