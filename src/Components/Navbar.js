//react function based component = rfc shortcut to get function
import React from 'react' //imr
import PropTypes from 'prop-types' //impt
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <div>
        {/* js in string */}
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} rounded-3 fixed-top border border-${props.mode==="light"?"dark":"light"} border-3 `}>
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </Link>
                <ul className={`dropdown-menu bg-${props.mode} text-${props.mode==="light"?"light":"dark"}`}>
                    <li><Link className={`dropdown-item text-${props.mode==="light"?"dark":"light"}`} to="/">Action</Link></li>
                    <li><Link className={`dropdown-item text-${props.mode==="light"?"dark":"light"}`} to="/">Another action</Link></li>
                    <li><hr className={`dropdown-divider border-2 border-${props.mode==="light"?"dark":"light"}`}/></li>
                    <li><Link className={`dropdown-item text-${props.mode==="light"?"dark":"light"}`} to="/">Something else here</Link></li>
                    </ul>
                </li>
                
            </ul>
            
            <div className="form-check form-switch my-3">
                <input className="form-check-input " onClick={() => {props.togglemode();props.alert()}}  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className={`form-check-label text-${props.mode==="light"?"dark":"light"} ml-1 mr-3`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div>
            </div>
        </div>
        </nav>

    </div>
  )
}

//to verify prop types //see in website console
Navbar.propTypes={ //this 'p' must be small
    title: PropTypes.string
};

Navbar.defaultProps={
    title: "harshal"
}