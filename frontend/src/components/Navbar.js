import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth } from "@fortawesome/free-solid-svg-icons";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container">
          <FontAwesomeIcon
            icon={faTooth}
            style={{ color: "white", marginRight: "12px" }}
          />
          <Link to="/" className="navbar-brand">
            Dentista FCFM
          </Link>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/citas" className="nav-link">
                  Citas
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">
                  Hacer cita
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
