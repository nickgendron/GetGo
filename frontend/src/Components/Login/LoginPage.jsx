import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Outlet, Link } from 'react-router-dom'
function Links() {
    return (
      <>
      

      <Link to="/Components/Main/Details/DetailsPage"> Log In </Link></>

    )
  }
export default function Login () {
    return (
      <section>
        Login
        <Links />
      </section>
    );
  }
