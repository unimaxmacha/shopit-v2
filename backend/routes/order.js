import express from "express";
const router = express.Router();

import { 
    getOrderDetails, 
    myOrders, 
    newOrder,
} from "../controllers/orderontrollers.js";
import { isAuthenticatedUser } from "../middlewares/auth.js";

router.route("/orders/new").post(isAuthenticatedUser, newOrder);
router.route("/orders/:id").get(isAuthenticatedUser, getOrderDetails);
router.route("/me/orders").get(isAuthenticatedUser, myOrders);

export default router;