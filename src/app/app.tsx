import { Link, Outlet } from "react-router-dom"

export const App = () => {
  return (
    <div>
      <Link to="finalize">FINALIZE</Link>
      <Link to="results">RESULTS</Link>
      <Outlet/>
      </div>
  )
}
