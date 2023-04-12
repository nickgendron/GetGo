import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import GridCard from "../GridCard/GridCard";
import "./Attractions.css";

function Attractions() {
  const [attricaionInfo, setAttractionInfo] = useState([]);
 
  useEffect(() => {
    
      async function fetchData() {
        try {
          const attractionsResponse = await axios.get(
            `http://127.0.0.1:8080/api/attractions/getAttractionsByOfferGroupID?offerGroupID=` + sessionStorage.getItem("attractionsOptionsMasterKey")
          );
          console.log(attractionsResponse.data);
          const attractions = attractionsResponse.data;
          setAttractionInfo(attractions);

        } catch (error) {
          console.error(error);
        }
      }
      fetchData();
  }, []);

  return (
    <>
      <div className="navBarComponent">
        <Navbar />
      </div>
      <div className="hotelsContent">
        <p className="hotelsInCity">Attractions in {sessionStorage.getItem("whereTo")}! </p>
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
        <div
          className="gridCardHoldingDiv"
          style={{ display: "flex", flexDirection: "column" }}
        >
          {attricaionInfo.map((attraction, i) => (
            <GridCard
              key={i}
              name={attraction.attrName}
              address={attraction.fullAddress}
              uniqueID={attraction.attractionID}
              type={attraction.type}
              rating={attraction.rating}
              priceLevel={attraction.price_level}
              description={attraction.description}
              images={attraction.photosURL}
              // locationID={attraction.attractionID}
              webURL={attraction.websiteURL}
              place="attraction"
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default Attractions;
