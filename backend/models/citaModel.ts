import { model, Schema, Model } from "mongoose";

import { ICita } from "./interfaces/ICita";

const citasSchema: Schema = new Schema(
  {
    nombrePaciente: { type: String, required: true },
    motivo: { type: String, required: true },
    fecha: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const Cita: Model<ICita> = model("Cita", citasSchema);

export default Cita;
