import React, { useState } from 'react';
import './FlightCard.css'
import axios from 'axios';
const AddToTripButton = ({ flightID, defaultSelected }) => {
  // Initialize the selected state for each button
  const [isSelected, setIsSelected] = useState(defaultSelected);

  console.log(flightID);
  // Function to handle button click
  const handleClick = () => {
    // Update the selected state for the current button
    setIsSelected(!isSelected);
    console.log(flightID);

    async function addObjectToVacation() {
        const url = "http://127.0.0.1:8080";
  
        var tmp;
        // const hotelsEndpoin
        const flightEndpoints =
          "/api/vacations/addFlight?flightID=" +
          flightID +
          "&vacationID=" +
          sessionStorage.getItem("vacationID");
  
        console.log("VacationID: " + sessionStorage.getItem("vacationID"));
        const apiCall = url + flightEndpoints;
        try {
          const response = await axios.post(apiCall);
          const data = response.json();
  
          console.log(data);
  
          tmp = data;
        } catch (error) {}
  
        sessionStorage.removeItem("choosenFlightIDForVacation");
        sessionStorage.setItem("choosenFlightIDForVacation", flightID);
        console.log(
          "Choosen flightID in SS: " +
            sessionStorage.getItem("choosenFlightIDForVacation")
        ); // You can access the locationID value here
        console.log(tmp);
      }
  
      addObjectToVacation();

  }

  return (
    <button
      onClick={handleClick}
      className={
        isSelected ? "addToTripButtonSelected" : "addToTripButton"
      }
    >
      {/* Render the button text based on the selected state */}
      {isSelected ? 'Added to trip' : 'Select to add'}
    </button>
  );
}

export default AddToTripButton;
