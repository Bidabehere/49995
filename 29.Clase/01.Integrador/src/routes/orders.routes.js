import { Router } from "express";
import { 
    getAllOrders, 
    getOrdersById, 
    createOrder,
    resolveOrder 
} from "../controllers/orders.controller.js";

const router = Router();

router.get("/",getAllOrders);
router.get("/:oid",getOrdersById);
router.post("/",createOrder);
router.put("/:oid",resolveOrder);

export { router as ordersRouter }; //-> import { ordersRouter }
// export default router -> no importa el nombre con el import