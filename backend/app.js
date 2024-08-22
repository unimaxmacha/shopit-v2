import express from "express";
const app = express();
import dotenv from "dotenv";
import { connectDatabase } from "./config/dbConnect.js";
import errorMiddleware from "./middlewares/errors.js";

dotenv.config({ path: "backend/config/config.env"});

// Connecting to Database
connectDatabase();

app.use(express.json());

// Import all routes
import proudctRoutes from "./routes/products.js";

app.use("/api/v1", proudctRoutes);

// Using error middleware
app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
    console.log(
        `Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
    );
});