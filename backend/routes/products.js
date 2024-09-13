import express from "express";
import { 
    canUserReview,
    createProductReview,
    deleteProduct, 
    deleteReview, 
    getProductDetails, 
    getProductReviews, 
    getProducts, 
    newProduct, 
    updateProductDetails 
} from "../controllers/productControllers.js";
import { authorizeRoles, isAuthenticatedUser } from "../middlewares/auth.js";
const router = express.Router();

router
    .route("/products").get(getProducts);
router
    .route("/admin/products")
    .post(isAuthenticatedUser, authorizeRoles("admin"), newProduct);

router.route("/products/:id").get(getProductDetails);

router
    .route("/admin/products/:id")
    .put(isAuthenticatedUser, authorizeRoles("admin"), updateProductDetails);
router
    .route("/admin/products/:id")
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);

router.route("/reviews")
    .put(isAuthenticatedUser, createProductReview)
    .get(isAuthenticatedUser, getProductReviews);

router.route("/admin/reviews")
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteReview);

router.route("/can_review")
    .get(isAuthenticatedUser, canUserReview);

export default router;