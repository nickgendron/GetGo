import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./MainAPI.css";
import { AppContext } from "../../../App";
import Flights from "../Flights/Flights";
import ReactLoading from "react-loading";
import { Section, Title, Article, Prop, list } from './loaders'

function MainAPI() {
  const { updateVariables } = useContext(AppContext);
  const { variables } = useContext(AppContext);
  const [data2, setData] = useState([]);

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




  // const [adults, setAdults] = useState("");
  var originCodeCall = "MSY";
  var destCodeCall = "ATL";
  var departDateold = "2024-01-01";
  var returnDateold = "2024-01-10";
  var adultsold = 1;
  var numFlights = 5;

  const [error, setError] = useState(null);

  useEffect(() => {

    // console.log(sessionStorage.getItem("userID"));
    // setLocationString(sessionStorage.getItem("whereTo"));
    // setDepartDate(sessionStorage.getItem("startDate"));
    // setReturnDate(sessionStorage.getItem("endDate"));
    // setOriginAirportCode(sessionStorage.getItem("sourceAirportCode"));
    // setDestAirportCode(sessionStorage.getItem("destAirportCode"));

    const fetchData = async () => {

      setLocationString(sessionStorage.getItem("whereTo"));
      setDepartDate(sessionStorage.getItem("startDate"));
      setReturnDate(sessionStorage.getItem("endDate"));
      setOriginAirportCode(sessionStorage.getItem("sourceAirportCode"));
      setDestAirportCode(sessionStorage.getItem("destAirportCode"));
  console.log(sessionStorage.getItem("whereTo"));

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
        if(data === null){
          return <h1>Error fetching flights</h1>
        }
        setFlightOfferID(data);
        sessionStorage.setItem("flightOfferID", data);
        console.log("flight offer id: " + sessionStorage.getItem("flightOfferID"));

      } catch (error) {
        // console.error(error);
      }
      try {
        const hotelResponse = await axios.get(
          `http://127.0.0.1:8080/api/hotels/nearbyHotels?location=` + sessionStorage.getItem("whereTo")
        );
        console.log(hotelResponse.status);
        const hotels = hotelResponse.data;
        setHotelsKey(hotels);

        sessionStorage.removeItem("hotelsOptionsMasterKey");
        sessionStorage.setItem("hotelsOptionsMasterKey", hotels);
        console.log("Hotel's key: " + sessionStorage.getItem("hotelsOptionsMasterKey"));

    
        // Save data to localStorage
        // localStorage.setItem(
        //   "hotelData",
        //   JSON.stringify({ location, hotels })
        // );
      } catch (error) {
        console.error(error);
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
        console.log("attractions: " + sessionStorage.getItem("attractionsOptionsMasterKey"));
        // // Save data to localStorage
        // localStorage.setItem(
        //   "attractionData",
        //   JSON.stringify({ location, attractions })
        // );
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
        // console.log(vacationID);
        sessionStorage.removeItem("vacationID");
        sessionStorage.setItem("vacationID", vacationID);
        console.log("Vacation ID: " + sessionStorage.getItem("vacationID"));

        // // Save data to localStorage
        // localStorage.setItem(
        //   "attractionData",
        //   JSON.stringify({ location, attractions })
        // );
      } catch (error) {
        console.error(error);
      }

     navigate("/flights")


    }
      /* Getting some hotel information (still need to figure out on backend i think)*/
  
    fetchData();

  }, []);

  // console.log(sessionStorage.getItem("whereTo"));
  // console.log(flightOfferID);
  // localStorage.removeItem("flightOfferID");

  // if(flightOfferID != null){navigate("/flights")}
  return <>

  <div className="loadingDiv">
    
        <ReactLoading type={"spin"} color="#000" className="loaderSpinner"/>
        </div>
  </>
}
export default MainAPI;
