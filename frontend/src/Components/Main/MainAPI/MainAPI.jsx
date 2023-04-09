import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./MainAPI.css";
import { AppContext } from "../../../App";
import Flights from "../Flights/Flights";

function MainAPI() {
  const { updateVariables } = useContext(AppContext);
  const { variables } = useContext(AppContext);
  const [data2, setData] = useState([]);

  const navigate = useNavigate();
  const [flightOfferID, setFlightOfferID] = useState("");
  const [hotelsKey, setHotelsKey] = useState();
  const [attractionsKey, setAttractionsKey] = useState("");
  const [vacationID, setVacationID] = useState("");

  var originCodeCall = "MSY";
  var destCodeCall = "SYD";
  var departDate = "2024-01-01";
  var returnDate = "2024-01-10";
  var adults = 1;
  var numFlights = 5;

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const flightOffersURL =
        "http://127.0.0.1:8080/api/flights/prices?originCode=" +
        originCodeCall +
        "&destCode=" +
        destCodeCall +
        "&departDate=" +
        departDate +
        "&returnDate=" +
        returnDate +
        "&adults=" + adults + "&numFlights=" + numFlights;
      try {
       const response = await axios.get(flightOffersURL);
        const data = response.data;
        setFlightOfferID(data);
        localStorage.setItem("flightOfferID", data);
        console.log(localStorage.getItem("flightOfferID"));

      } catch (error) {
        // console.error(error);
      }
  
      /* Getting some hotel information (still need to figure out on backend i think)*/
    
    };

    fetchData();
  }, [originCodeCall, destCodeCall, departDate, returnDate, adults, numFlights]);

  // console.log(flightOfferID);
  // localStorage.removeItem("flightOfferID");

  return <p>Please wait, loading your dream vacation</p>;
}
export default MainAPI;
