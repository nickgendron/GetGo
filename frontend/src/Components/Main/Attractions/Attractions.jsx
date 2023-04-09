import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import GridCard from "../GridCard/GridCard";
import "./Attractions.css";

function Attractions() {
  var location = "Dubai,UnitedArabEmirates";
  const [attricaionInfo, setAttractionInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if hotel data exists in localStorage
    const attractionData = JSON.parse(localStorage.getItem("attractionData"));

    if (attractionData && attractionData.location === location) {
      // Use data from localStorage
      setAttractionInfo(attractionData.attractions);
      setLoading(false);
    } else {
      // Fetch new hotel data
      async function fetchData() {
        try {
          const attractionResponse = await axios.get(
            `http://127.0.0.1:8080/api/attractions/nearbyAttractions?location=` +
              location
          );
          const attractions = attractionResponse.data;
          setAttractionInfo(attractions);
          setLoading(false);

          // Save data to localStorage
          localStorage.setItem(
            "attractionData",
            JSON.stringify({ location, attractions })
          );
        } catch (error) {
          console.error(error);
        }
      }
      fetchData();
    }
  }, [location]);

  console.log(attricaionInfo);

  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }

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
        <div
          className="gridCardHoldingDiv"
          style={{ display: "flex", flexDirection: "column" }}
        >
          {attricaionInfo.map((attraction, i) => (
            <GridCard
              key={i}
              name={attraction.name}
              address={attraction.address_string}
              type={attraction.type}
              rating={attraction.rating}
              priceLevel={attraction.price_level}
              description={attraction.description}
              images={attraction.images_url}
              locationID={attraction.location_id}
            />
          ))}
        </div>

        {/* STARTING HERE WE WOLD NEED TO HAVE LOGIC TO MAKE BACKEND CALLS */}
      </div>
    </>
  );
}
export default Attractions;
