import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = (props) => {
  const {title} = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <a className="navbar-brand" href="/#">{title}</a>
     
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact/add">ADD</Link>
          </li>
       
        </ul>
      </div>
    </nav>
  )
}



Navbar.defaultProps ={
  title : "Menu"
}
export default Navbar;
