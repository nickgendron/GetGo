import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./MainAPI.css";
import { AppContext } from "../../../App";
import Flights from "../Flights/Flights";

function MainAPI() {
  const { updateVariables } = useContext(AppContext);
  const { variables } = useContext(AppContext);
  const [data2, setData] = useState([]);
  const [newVariableValue, setNewVariableValue] = useState("");
  const handleVariable1Change = (e) => {
    setNewVariableValue(e.target.value);
  };

  const navigate = useNavigate();
  const [flightOfferID, setFlightOfferID] = useState();
  var originCode = "MSY";
  var destCode = "JFK";
  var departDate = "2024-01-01";
  var returnDate = "2024-01-10";
  var adults = 1;
  var numFlights = 5;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         `http://127.0.0.1:8080/api/flights/prices?originCode=${originCode}&destCode=${destCode}&departDate=${departDate}&returnDate=${returnDate}&adults=${adults}&numFlights=${numFlights}`,
  //         {
  //           mode: "cors",
  //         }
  //       );
  //       const data = await response.text;
  //       console.log(data);
  //       setFlightOfferID(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  //   console.log(flightOfferID);

  // }, []);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const originCode = 'MSY'; // Replace with actual value
        const destCode = 'JFK'; // Replace with actual value
        const departDate = '2024-01-01'; // Replace with actual value
        const returnDate = '2024-01-10'; // Replace with actual value
        const adults = '1'; // Replace with actual value
        const numFlights = '5'; // Replace with actual value

        const response = await fetch(`http://127.0.0.1:8080/api/flights/prices?originCode=${originCode}&destCode=${destCode}&departDate=${departDate}&returnDate=${returnDate}&adults=${adults}&numFlights=${numFlights}`,
        {
          mode: 'no-cors',
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const dataLocal =  await response.json(); // use response.json() if expecting JSON data
        setData(dataLocal);
        console.log(dataLocal);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  console.log(data2);
  if(data2){
    return <Flights offerIDNew={data2} />;
  }
  return <p>Please wait, loading your dream vacation</p>
}
export default MainAPI;
