import express from "express";
const app = express();
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDatabase } from "./config/dbConnect.js";
import errorMiddleware from "./middlewares/errors.js";

// Handle Uncaught exceptions
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err}`);
    console.log("Shutting down due to uncaught exception.");
    process.exit(1); 
})

dotenv.config({ path: "backend/config/config.env"});

// Connecting to Database
connectDatabase();

app.use(express.json());
app.use(cookieParser());

// Import all routes
import proudctRoutes from "./routes/products.js";
import authRoutes from "./routes/auth.js";

app.use("/api/v1", proudctRoutes);
app.use("/api/v1", authRoutes);

// Using error middleware
app.use(errorMiddleware);

const server = app.listen(process.env.PORT, () => {
    console.log(
        `Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
    );
});

// Handle Unhandled Promise Rejections
process.on("unhandledRejection", (err) => {
    console.log(`ERROR: ${err}`);
    console.log("Shutting down server due to unhandled promise rejection.");
    server.close(() => {
        process.exit(1);
    })
});