import { Router } from "express";
import { UserController } from "../controlador/user.controller.js";

const router = Router();

router.get("/", UserController.getUsers);
router.post("/",UserController.saveUser);

export { router as usersRouter };