import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import GridCard from "../GridCard/GridCard";
import "./Hotels.css";

function Hotels() {

  const [hotelInfo, setHotelInfo] = useState([]);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
   

      async function fetchData() {
        try {
          const hotelResponse = await axios.get(
            `http://127.0.0.1:8080/api/hotels/getHotelByRandomID?hotelUUID=` + sessionStorage.getItem("hotelsOptionsMasterKey")
          );
          const hotels = hotelResponse.data;
          setHotelInfo(hotels);
          setLoading(false);

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
        <p className="hotelsInCity">Hotels in {sessionStorage.getItem("whereTo")}! </p>
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
        <div className="gridCardHoldingDiv"style={{ display: "flex", flexDirection: "column" }}>
          {hotelInfo.map((hotel, i) => {
              return (
                <GridCard
                  key={i}
                  name={hotel.hotelName}
                  address={hotel.fullAddress}
                  uniqueID={hotel.hotelID}
                  type={"hotel"}
                  rating={hotel.rating}
                  priceLevel={hotel.price_level}
                  description={hotel.description}
                  images={hotel.photosURL}
                  place="hotel"
                />
              );
            // }
            return null;
          })}
        </div>

        {/* STARTING HERE WE WOLD NEED TO HAVE LOGIC TO MAKE BACKEND CALLS */}
      </div>
    </>
  );
}

export default Hotels;
