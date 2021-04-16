import { Document } from "mongoose";

export interface ICita extends Document {
  nombrePaciente: string;
  motivo: string;
  fecha: Date;
}
