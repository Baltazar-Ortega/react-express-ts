import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class UpdateCita extends Component {
  constructor(props) {
    super(props);

    this.onChangeNombrePaciente = this.onChangeNombrePaciente.bind(this);
    this.onChangeMotivo = this.onChangeMotivo.bind(this);
    this.onChangeFecha = this.onChangeFecha.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      nombrePaciente: "",
      motivo: "",
      date: new Date(),
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/citas/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          nombrePaciente: response.data.nombrePaciente,
          motivo: response.data.motivo,
          fecha: new Date(response.data.fecha),
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onChangeNombrePaciente(e) {
    this.setState({
      nombrePaciente: e.target.value,
    });
  }

  onChangeMotivo(e) {
    this.setState({
      motivo: e.target.value,
    });
  }

  onChangeFecha(fecha) {
    this.setState({
      fecha: fecha,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const cita = {
      nombrePaciente: this.state.nombrePaciente,
      motivo: this.state.motivo,
      fecha: this.state.fecha,
    };

    console.log(cita);

    axios
      .put(
        "http://localhost:5000/citas/update/" + this.props.match.params.id,
        cita
      )
      .then((res) => console.log(res.data));

    window.location = "/citas";
  }

  render() {
    return (
      <div>
        <h3 className="mb-4">Editar cita</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Nombre del paciente: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.nombrePaciente}
              onChange={this.onChangeNombrePaciente}
            />
          </div>
          <div className="form-group">
            <label>Motivo: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.motivo}
              onChange={this.onChangeMotivo}
            />
          </div>
          <div className="form-group">
            <label>Fecha: </label>
            <div>
              <DatePicker
                dateFormat="dd/MM/yyy"
                selected={this.state.fecha}
                onChange={this.onChangeFecha}
              />
            </div>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Editar cita"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
