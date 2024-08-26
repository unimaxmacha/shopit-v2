import express from "express";
import { 
    deleteProduct, 
    getProductDetails, 
    getProducts, 
    newProduct, 
    updateProductDetails 
} from "../controllers/productControllers.js";
import { authorizeRoles, isAuthenticatedUser } from "../middlewares/auth.js";
const router = express.Router();

router
    .route("/products")
    .get(isAuthenticatedUser, authorizeRoles("admin"), getProducts);
router.route("/admin/products").post(newProduct);

router.route("/products/:id").get(getProductDetails);

router.route("/admin/products/:id").put(updateProductDetails);
router.route("/admin/products/:id").delete(deleteProduct);

export default router;