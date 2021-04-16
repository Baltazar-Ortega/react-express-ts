import { Response } from "express";
import Cita from "../models/citaModel";
import { IInputCita } from "../models/interfaces/IInputCita";

class CitasService {
  public async getAll(res: Response) {
    try {
      const citas = await Cita.find();
      return citas;
    } catch (err) {
      res.status(400).json("Error: " + err);
    }
  }

  public async getOne(id: string, res: Response) {
    try {
      const cita = await Cita.findById(id);
      return cita;
    } catch (err) {
      res.status(400).json("Error: " + err);
    }
  }

  public async create(newCita: IInputCita, res: Response) {
    const { nombrePaciente, motivo, fecha } = newCita;
    const citaBody = new Cita({
      nombrePaciente,
      motivo,
      fecha,
    });
    try {
      await citaBody.save();
      return res.json("Cita añadida");
    } catch (err) {
      res.status(400).json("Error: " + err);
    }
  }

  public async update(updatedCita: IInputCita, id: string, res: Response) {
    const citaToUpdate = await Cita.findById(id);
    if (citaToUpdate) {
      citaToUpdate.nombrePaciente = updatedCita.nombrePaciente;
      citaToUpdate.motivo = updatedCita.motivo;
      citaToUpdate.fecha = updatedCita.fecha;
      try {
        await citaToUpdate.save();
        return res.json("Cita updated!");
      } catch (err) {
        res.status(400).json("Error: " + err);
      }
    }
  }

  public async delete(id: string, res: Response) {
    const deletedCita = await Cita.findByIdAndDelete(id);
    if (deletedCita) {
      return res.json("Cita deleted!");
    } else {
      return res.status(400).json("Error: Cita no encontrada");
    }
  }
}

export default new CitasService();
