import { Router } from "express";
import citasController from "../controllers/citasController";

class CitasRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
    this.router.get("/", citasController.getAll);
    this.router.get("/:id", citasController.getOne);
    this.router.post("/add", citasController.create);
    this.router.put("/update/:id", citasController.update);
    this.router.delete("/:id", citasController.delete);
  }
}

export default new CitasRoutes().router;
