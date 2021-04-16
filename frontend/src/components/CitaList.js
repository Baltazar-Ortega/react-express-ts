import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Cita = (props) => (
  <tr>
    <td>{props.cita.nombrePaciente}</td>
    <td>{props.cita.motivo}</td>
    <td>{new Date(props.cita.fecha).toLocaleDateString("es-MX")}</td>
    <td>
      <button>
        <Link to={"/edit/" + props.cita._id}>editar</Link>
      </button>{" "}
      |{" "}
      <button
        style={{ color: "red" }}
        href="#"
        onClick={() => {
          props.deleteCita(props.cita._id);
        }}
      >
        borrar
      </button>
    </td>
  </tr>
);

export default class CitaList extends Component {
  constructor(props) {
    super(props);

    this.deleteCita = this.deleteCita.bind(this);

    this.state = { citas: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/citas/")
      .then((response) => {
        this.setState({ citas: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteCita(id) {
    axios.delete("http://localhost:5000/citas/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      citas: this.state.citas.filter((el) => el._id !== id),
    });
  }

  citasList() {
    return this.state.citas.map((currentCita) => {
      return (
        <Cita
          cita={currentCita}
          deleteCita={this.deleteCita}
          key={currentCita._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3 className="mb-4">Citas</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Nombre del paciente</th>
              <th>Motivo</th>
              <th>Fecha</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>{this.citasList()}</tbody>
        </table>
      </div>
    );
  }
}
