import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth } from "@fortawesome/free-solid-svg-icons";
import dentistry from "../assets/dentistry.jpg";

export default class Home extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2 className="mb-4 mt-2">
          Servicios dentales para los estudiantes de FCFM{" "}
          <FontAwesomeIcon icon={faTooth} style={{ marginLeft: "10px" }} />
        </h2>
        <img
          src={dentistry}
          style={{ maxWidth: "100%", height: "450px" }}
          alt="tooth icon"
        />
        <p className="mt-4 mb-5 h5">
          Bienvenid@ al sistema "Dentista FCFM". Aqui podra administrar las
          citas de los estudiantes.
        </p>
      </div>
    );
  }
}
