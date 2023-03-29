import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Outlet, Link } from 'react-router-dom'
function Links() {
    return (
      <>
      

      <Link to="/Components/Main/Details/DetailsPage"> Log In </Link></>

    )
  }
export default function WhereTo () {
    return (
      <section>
        WhereTo
        <Links />
      </section>
    );
  }
