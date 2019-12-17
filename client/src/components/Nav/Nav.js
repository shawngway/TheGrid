import React, { useContext } from "react";
import "./Nav.css";
import LogInOutBtn from "../LogInOutBtn/LogInOutBtn";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Nav = () => {
  const { isAuthenticated } = useContext(AuthContext);

  const homeLink = () => {
    const currentLink = isAuthenticated ? '/feed' : '/';

    return <Link to={currentLink} className="navbar-brand">BASE</Link>
  }

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-primary">
        {homeLink()}
        {/* add "active" to the nav-item className for what is active */}
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            {isAuthenticated ?
              <Link to="/feed" className="nav-link">Feed</Link> :
              null}
          </li>
          <li className="nav-item">
            {isAuthenticated ?
              <Link to="/clans" className="nav-link">Clans</Link> :
              null}
          </li>
          <li className="nav-item">
            {isAuthenticated ?
              <Link to="/discover" className="nav-link">Discover</Link> :
              null}
          </li>
        </ul>
        <LogInOutBtn />
      </nav>
    </div>
  );
}

export default Nav;
