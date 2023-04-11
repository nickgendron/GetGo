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
  const [flightOfferID, setFlightOfferID] = useState("");
  const [hotelsKey, setHotelsKey] = useState();
  const [attractionsKey, setAttractionsKey] = useState("");
  const [vacationID, setVacationID] = useState("");
  const [locationString, setLocationString] = useState("");
  const [originAirportCode, setOriginAirportCode] = useState("");
  const [destAirportCode, setDestAirportCode] = useState("");
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLocationString(sessionStorage.getItem("whereTo"));
      setDepartDate(sessionStorage.getItem("startDate"));
      setReturnDate(sessionStorage.getItem("endDate"));
      setOriginAirportCode(sessionStorage.getItem("sourceAirportCode"));
      setDestAirportCode(sessionStorage.getItem("destAirportCode"));
      console.log(sessionStorage.getItem("numberOfTravlers"));

      const flightOffersURL =
        "http://127.0.0.1:8080/api/flights/prices?originCode=" +
        sessionStorage.getItem("sourceAirportCode") +
        "&destCode=" +
        sessionStorage.getItem("destAirportCode") +
        "&departDate=" +
        sessionStorage.getItem("startDate") +
        "&returnDate=" +
        sessionStorage.getItem("endDate") +
        "&adults=1&numFlights=5";
      try {
        const response = await axios.get(flightOffersURL);
        const data = response.data;
        // if (data === null) {
        //   return <h1>Error fetching flights</h1>;
        // }
        setFlightOfferID(data);
        sessionStorage.setItem("flightOfferID", data);
      } catch (error) {}
      try {
        const hotelResponse = await axios.get(
          `http://127.0.0.1:8080/api/hotels/nearbyHotels?location=` +
            sessionStorage.getItem("whereTo")
        );
        const hotels = hotelResponse.data;
        setHotelsKey(hotels);

        sessionStorage.removeItem("hotelsOptionsMasterKey");
        sessionStorage.setItem("hotelsOptionsMasterKey", hotels);
      } catch (error) {
        // console.error(error);
      }
      try {
        const attractionResponse = await axios.get(
          `http://127.0.0.1:8080/api/attractions/nearbyAttractions?location=` +
            sessionStorage.getItem("whereTo")
        );
        const attractions = attractionResponse.data;
        setAttractionsKey(attractions);

        sessionStorage.removeItem("attractionsOptionsMasterKey");
        sessionStorage.setItem("attractionsOptionsMasterKey", attractions);
        console.log(
          "attractions: " +
            sessionStorage.getItem("attractionsOptionsMasterKey")
        );
      } catch (error) {
        console.error(error);
      }

      try {
        const attractionResponse = await axios.post(
          `http://127.0.0.1:8080/api/vacations/createNewVacation?userID=` +
            sessionStorage.getItem("userID")
        );
        const vacationID = attractionResponse.data;
        setVacationID(vacationID);
        sessionStorage.removeItem("vacationID");
        sessionStorage.setItem("vacationID", vacationID);
      } catch (error) {
        // console.error(error);
      }

      console.log(sessionStorage.getItem("flightOfferID"));
      navigate("/flights");
    };
    /* Getting some hotel information (still need to figure out on backend i think)*/

    fetchData();
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
          <h9 className="regularSmallerGreyText">
            We're building you the vacation of your dreams.
          </h9>
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
