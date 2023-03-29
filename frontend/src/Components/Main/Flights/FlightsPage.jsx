import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Outlet, Link } from 'react-router-dom'
function Links() {
    return (
      <>
      <Link to="/"> Home </Link>
      <Link to="/Components/Login/LoginPage"> Login </Link>
      <Link to="/Components/Signup/SignupPage"> Signup </Link>
      <Link to="/Components/Main/Attractions/AttractionsPage"> Attractions </Link>
      <Link to="/Components/Main/Details/DetailsPage"> Details </Link>
      <Link to="/Components/Main/Flights/FlightsPage"> Flights </Link>
      <Link to="/Components/Main/Hotels/HotelsPage"> Hotels </Link>
      <Link to="/Components/Main/Summary/SummaryPage"> Summary </Link></>
    )
  }
export default function Flights() {
    return (
      <section>
        Flights
      </section>
    );
  }
