import { Request, Response } from "express";
import { IInputCita } from "../models/interfaces/IInputCita";

import citasService from "../services/citasService";

class CitasController {
  public async getAll(req: Request, res: Response) {
    const citas = await citasService.getAll(res);
    return res.json(citas);
  }

  public async getOne(req: Request, res: Response) {
    const { id } = req.params;
    const cita = await citasService.getOne(id, res);
    if (cita) {
      return res.json(cita);
    }
    return res.status(404).json({ text: "La cita no existe" });
  }

  public async create(req: Request, res: Response) {
    const nombrePaciente = req.body.nombrePaciente;
    const motivo = req.body.motivo;
    const fecha = new Date(req.body.fecha);

    const newCita: IInputCita = { nombrePaciente, motivo, fecha };
    await citasService.create(newCita, res);
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params;
    const nombrePaciente = req.body.nombrePaciente;
    const motivo = req.body.motivo;
    const fecha = new Date(req.body.fecha);

    const updatedCita: IInputCita = { nombrePaciente, motivo, fecha };
    await citasService.update(updatedCita, id, res);
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;
    await citasService.delete(id, res);
  }
}

export default new CitasController();
