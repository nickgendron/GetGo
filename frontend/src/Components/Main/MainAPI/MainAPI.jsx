import React, { createContext, useState, useContext, useEffect } from "react";
import "./MainAPI.css";
import { AppContext } from "../../../App";

function MainAPI() {
  const { updateVariables } = useContext(AppContext);
  const { variables } = useContext(AppContext);
  const [newVariableValue, setNewVariableValue] = useState("");
  const handleVariable1Change = (e) => {
    setNewVariableValue(e.target.value);
  };
  const [flightOfferID, setFlightOfferID] = useState();
  var originCode = "MSY";
  var destCode = "JFK";
  var departDate = "2024-01-01";
  var returnDate = "2024-01-10";
  var adults = 1;
  var numFlights = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8080/api/flights/prices?originCode=${originCode}&destCode=${destCode}&departDate=${departDate}&returnDate=${returnDate}&adults=${adults}&numFlights=${numFlights}`,
          {
            mode: "cors",
          }
        );
        const data = await response.data;
        console.log(data);
        setFlightOfferID(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  function infiniteReturn() {
    return <p>Loading...</p>;
  }

  console.log(flightOfferID);
  return <p>hello</p>;
}
export default MainAPI;
