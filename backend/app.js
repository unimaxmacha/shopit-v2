import express from "express";
const app = express();
import dotenv from "dotenv";
import { connectDatabase } from "./config/dbConnect.js";

dotenv.config({ path: "backend/config/config.env"});

// Connecting to Database
connectDatabase();

app.use(express.json());

// Import all routes
import proudctRoutes from "./routes/products.js";

app.use("/api/v1", proudctRoutes);

app.listen(process.env.PORT, () => {
    console.log(
        `Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
    );
});