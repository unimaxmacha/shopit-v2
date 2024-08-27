import express from "express";
const router = express.Router();

import { newOrder } from "../controllers/orderontrollers.js";
import { isAuthenticatedUser } from "../middlewares/auth.js";

router.route("/orders/new").post(isAuthenticatedUser, newOrder)

export default router;