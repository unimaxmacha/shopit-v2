import express from "express";
const router = express.Router();

import { 
    allOrders,
    getOrderDetails, 
    myOrders, 
    newOrder,
    updateOrder,
} from "../controllers/orderontrollers.js";
import { authorizeRoles, isAuthenticatedUser } from "../middlewares/auth.js";

router.route("/orders/new").post(isAuthenticatedUser, newOrder);
router.route("/orders/:id").get(isAuthenticatedUser, getOrderDetails);
router.route("/me/orders").get(isAuthenticatedUser, myOrders);

router
    .route("/admin/orders")
    .get(isAuthenticatedUser, authorizeRoles("admin"), allOrders);

    router
    .route("/admin/orders/:id")
    .put(isAuthenticatedUser, authorizeRoles("admin"), updateOrder);

export default router;