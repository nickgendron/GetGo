import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./MainAPI.css";
import { AppContext } from "../../../App";
import Flights from "../Flights/Flights";
import ReactLoading from "react-loading";
import { Section, Title, Article, Prop, list } from "./loaders";
import BarLoader from "react-spinners/BarLoader";
import whiteLogo from "../../Images/whiteVectorGetGoLogo.png";

function MainAPI() {
  const navigate = useNavigate();
  // const [flightOfferID, setFlightOfferID] = useState("");
  // const [hotelsKey, setHotelsKey] = useState();
  // const [attractionsKey, setAttractionsKey] = useState("");
  // const [vacationID, setVacationID] = useState("");
  // const [locationString, setLocationString] = useState("");
  // const [originAirportCode, setOriginAirportCode] = useState("");
  // const [destAirportCode, setDestAirportCode] = useState("");
  // const [departDate, setDepartDate] = useState("");
  // const [returnDate, setReturnDate] = useState("");
  // const [loading, setLoading] = useState(false);

  // const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const fetchData = async () => {
      sessionStorage.removeItem("flightOfferID");
      sessionStorage.removeItem("vacationID");
      sessionStorage.removeItem("hotelsOptionsMasterKey");
      sessionStorage.removeItem("attractionsOptionsMasterKey");

      // setLocationString(sessionStorage.getItem("whereTo"));
      // setDepartDate(sessionStorage.getItem("startDate"));
      // setReturnDate(sessionStorage.getItem("endDate"));
      // setOriginAirportCode(sessionStorage.getItem("sourceAirportCode"));
      // setDestAirportCode(sessionStorage.getItem("destAirportCode"));
      // console.log(sessionStorage.getItem("numberOfTravlers"));

      const flightOffersURL =
        "http://127.0.0.1:8080/api/flights/prices?originCode=" +
        sessionStorage.getItem("sourceAirportCode") +
        "&destCode=" +
        sessionStorage.getItem("destAirportCode") +
        "&departDate=" +
        sessionStorage.getItem("startDate") +
        "&returnDate=" +
        sessionStorage.getItem("endDate") +
        "&adults=" +
        sessionStorage.getItem("numberOfTravlers") +
        "&numFlights=5";

      const hotelURL =
        "http://127.0.0.1:8080/api/hotels/nearbyHotels?location=" +
        sessionStorage.getItem("whereTo");

      const attractionURL =
        "http://127.0.0.1:8080/api/attractions/nearbyAttractions?location=" +
        sessionStorage.getItem("whereTo");

      const createVacationURL =
        "http://127.0.0.1:8080/api/vacations/createNewVacation?userID=" +
        sessionStorage.getItem("userID");

      const createPlannerURL =
        "http://127.0.0.1:8080/api/tripPlanner/newPlanner?vacationID=" +
        sessionStorage.getItem("vacationID");

      const [
        flightResponse,
        hotelResponse,
        attractionResponse,
        createVacationResponse,
        createPlannerResponse,
      ] = await Promise.all([
        await axios.get(flightOffersURL),
        await axios.get(hotelURL),
        await axios.get(attractionURL),
        await axios.post(createVacationURL),
        await axios.post(createPlannerURL),
      ]);

      const flightData = flightResponse.data;
      const hotelData = hotelResponse.data;
      const attractionData = attractionResponse.data;
      const vacationID = createVacationResponse.data;
      const plannerID = createPlannerResponse.data;

      // setFlightOfferID(flightData);
      // setHotelsKey(hotelData);
      // setAttractionsKey(attractionData);
      // setVacationID(vacationID);

      // Store data in session storage
      sessionStorage.setItem("flightOfferID", flightData);
      sessionStorage.setItem("hotelsOptionsMasterKey", hotelData);
      sessionStorage.setItem("attractionsOptionsMasterKey", attractionData);
      sessionStorage.setItem("plannerID", plannerID);

      sessionStorage.removeItem("vacationID");
      sessionStorage.setItem("vacationID", vacationID);
      navigate("/flights");
    };

    fetchData();
    return () => abortController.abort();
  }, []);

  return (
    <>
      <div className="mainApiLoadingRootDiv">
        <div className="loadingDiv">
          <br />
          <div className="aboveLoadingDiv">
            {" "}
            <img className="imageLogoWhite" src={whiteLogo} />
          </div>

          <h1 className="topLineBoldText">Pack your bags!</h1>
          <br />
          <p className="regularSmallerGreyText">
            We're building you the vacation of your dreams.
          </p>
          <br />
          <br />
          <br />
          <BarLoader color="#e32424" width={600} className="loadingBar" />

          <br />
          <br />
        </div>
      </div>
    </>
  );
}
export default MainAPI;
