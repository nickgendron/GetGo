import React, { useEffect } from "react";
import axios from "axios";
function RemoveFromTrip(){
    console.log("Remove from vacation clicked");

    useEffect(() => {

      // console.log(sessionStorage.getItem("userID"));
      // setLocationString(sessionStorage.getItem("whereTo"));
      // setDepartDate(sessionStorage.getItem("startDate"));
      // setReturnDate(sessionStorage.getItem("endDate"));
      // setOriginAirportCode(sessionStorage.getItem("sourceAirportCode"));
      // setDestAirportCode(sessionStorage.getItem("destAirportCode"));
  
      const fetchData = async () => {

        try {
          const attractionResponse = await axios.delete(
            `http://127.0.0.1:8080/api/vacations/deleteFlightByVacationID?vacationID=` +
            sessionStorage.getItem("userID")
          );
          const vacationID = attractionResponse.data;
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
    
      }
        /* Getting some hotel information (still need to figure out on backend i think)*/
    
      fetchData();
  
    }, []);
}

export default RemoveFromTrip;