import { NavLink } from "react-router-dom"

export default function NotFound() {
  return (
    <div>
      <h2>Page not found!</h2>
      <p>Sorry, the page you are looking for does not exist.</p>

      <p>Go to the <NavLink to="/">Homepage</NavLink>.</p>
    </div>
  )
}