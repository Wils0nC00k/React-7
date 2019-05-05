import React from 'react'
import { NavLink } from 'react-router-dom'

class Navigation extends React.Component {
  render() {
    return (
    <div>
      <ul className="NavBar">
      <li>
        <NavLink    
          className="navlinks"    
          activeClassName="active"
          exact to="/"
          >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="navlinks" 
          activeClassName="active"
          to="/our-history"
          >
          Our History
        </NavLink>
      </li>
    </ul>
  </div>
    )
  }
}
export default Navigation