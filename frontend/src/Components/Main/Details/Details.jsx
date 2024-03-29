import React, { useState, useEffect } from "react";
import TextLogo from "../../Images/TextLogo.png";
import FormBackgroundDetails from "../../Images/formBackgroundDetailsPage.png";
import SmallLogo from "../../Images/SmallLogo.png";
import { useNavigate } from "react-router-dom";
import DateRangePicker from "react-bootstrap-daterangepicker";
import moment from "moment";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import MainAPI from "../MainAPI/MainAPI";
import IncDecCounter from "./IncDecCounter";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./Details.css";

function Details() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [leavingFrom, setLeavingFrom] = useState("");
  const [whereTo, setWhereTo] = useState("");
  const [sourceAirportCode, setSourceAirportCode] = useState("");
  const [destAirportCode, setDestAirportCode] = useState("");
  const [numberOfTravlers, setNumberOfTravlers] = useState();

  const navigate = useNavigate();

  const handleDropdownChange = (selectedOption) => {
    setNumberOfTravlers(selectedOption.value);
  };

  const options = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
  ];
  const defaultOption = options[0].value;
  function handleDatesChange({ startDate, endDate }) {
    setStartDate(startDate);
    setEndDate(endDate);
  }

  function handleNavigate(event) {
    event.preventDefault();

    sessionStorage.removeItem("leavingFrom");
    sessionStorage.removeItem("choosenHotelIDForVacation");
    sessionStorage.removeItem("numberOfTravlers");
    sessionStorage.removeItem("plannerID");
    sessionStorage.removeItem("choosenAttractionIDForVacation");
    sessionStorage.removeItem("choosenAttractionIDForVacation");
    sessionStorage.removeItem("choosenFlightIDForVacation");
    sessionStorage.removeItem("whereTo");
    sessionStorage.removeItem("startDate");
    sessionStorage.removeItem("endDate");
    sessionStorage.removeItem("sourceAirportCode");
    sessionStorage.removeItem("destAirportCode");
    if (!leavingFrom || !whereTo || !startDate || !endDate) {
      alert("Please fill out all fields");
      return;
    }

    sessionStorage.setItem("leavingFrom", leavingFrom);
    sessionStorage.setItem("whereTo", whereTo);
    sessionStorage.setItem("startDate", startDate.format("YYYY-MM-DD"));
    sessionStorage.setItem("endDate", endDate.format("YYYY-MM-DD"));
    sessionStorage.setItem("sourceAirportCode", sourceAirportCode);
    sessionStorage.setItem("destAirportCode", destAirportCode);
    sessionStorage.setItem("numberOfTravlers", numberOfTravlers);

    navigate("/mainapi");
  }

  function handleLeavingFromChange(event) {
    setLeavingFrom(event.target.value);

  }

  function handleWhereToChange(event) {
    for (var i = 0; i < 4; ) {}
    setWhereTo(event.target.value);
  }

  function handleApply(event, picker) {
    const start = picker.startDate.format("YYYY-MM-DD");
    const end = picker.endDate.format("YYYY-MM-DD");
    const button = document.querySelector(".daterangepicker .applyBtn");
    button.innerHTML = `${start} - ${end}`;
    setStartDate(picker.startDate);
    setEndDate(picker.endDate);
  }

  function test() {
  }

  function renderApplyButton() {
    if (!startDate || !endDate) {
      return (
        <button className="btn btn-primary" disabled>
          Select Dates
        </button>
      );
    }

    const start = startDate.format("MM/DD/YYYY");
    const end = endDate.format("MM/DD/YY");

    return (
      <button className="btn btn-primary">
        {start} - {end}
      </button>
    );
  }

  return (
    <div>
      <div className="topRowIcons">
        <img className="smallLogoStyle" src={SmallLogo} />
        <img className="textLogoStyle" src={TextLogo} />
        <div className="buttonDiv"></div>
      </div>
      <br />
      <div className="formFiller">
        <div className="loginForms">
          <h1 className="letsGetGoing">
            <strong>Let's get going!</strong>
          </h1>
          <br />
          <br />
          <input
            className="textFormInputDetails"
            placeholder="Leaving from?"
            required={true}
            onBlur={(e) => {
              setLeavingFrom(e.target.value);
            }}
          ></input>

          <input
            className="textFormInputDetails"
            placeholder="Where to?"
            onBlur={(e) => {
              setWhereTo(e.target.value);
            }}
          ></input>
          <br />
          <br />

          {/* Origin (local to you) airport */}
          <input
            className="departingAirportButton"
            placeholder="Departing Airport"
            required={true}
            // value={leavingFrom}
            onBlur={(e) => {

              setSourceAirportCode(e.target.value);
            }}
          ></input>

          {/* Dest (vacation spot airport) */}
          <input
            className="arrivingAirportButton"
            placeholder="Arriving Airport"
            required={true}
            onBlur={(e) => {
              setDestAirportCode(e.target.value);
            }}
          ></input>
          <br />
          <br />
          <Dropdown
            options={options}
            onChange={handleDropdownChange}
            className="dropDownInput"
            placeholder="How many travelers?"
          />
        </div>
        <div className="calendarDiv">
          <br />
          <br />
          <br />
          <br />
          <DateRangePicker
            startDate={startDate}
            endDate={endDate}
            onApply={handleApply}
            required={true}
          >
            <button className="openCalendarButton">
              {startDate && endDate
                ? `${startDate.format("M/D/YYYY")} - ${endDate.format(
                    "MM/DD/YYYY"
                  )}`
                : "When?"}
            </button>
          </DateRangePicker>
        </div>

        <div className="letsGoDiv">
          <button onClick={handleNavigate} className="letsGoButton">
            Let's go!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;
