import { Router } from "express";
import { JugueteController } from "../controlador/juguete.controller.js";

const router = Router();

//definimos las rutas de juguetes
router.get("/", JugueteController.getJuguete);
router.post("/",JugueteController.saveJuguete);

//export default router;

export { router as jugueteRouter };
