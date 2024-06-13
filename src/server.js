import express from "express";
import cors from "cors";
import morgan from "morgan";

//local imports
import employeeRoutes from "./routes/user.routes.js";
import { errMiddlewar } from "./middleware/user.errorMiddleware.js";
//app initialize
const app = express();

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// routes
app.use("/api/", employeeRoutes);
app.use(errMiddlewar);
//listner
app.listen(8000, () => {
  console.log("server is running on port 8000");
});

export default app;
