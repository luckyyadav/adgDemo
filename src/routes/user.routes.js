import { Router } from "express";
import {
  createEmployee,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
} from "../controller/user.controller.js";

// Initialize routes
const routes = Router();

//endpoints
routes.post("/employee/create", createEmployee);
routes.get("/employee/allEmployees", getAllUsers);
routes.get("/employee/single/:id", getSingleUser);
routes.put("/employee/update/:id", updateUser);
routes.delete("/employee/delete/:id", deleteUser);

export default routes;
