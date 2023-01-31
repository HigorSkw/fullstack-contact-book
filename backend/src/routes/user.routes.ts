import { Router } from "express";

const userRoutes = Router();

import userCreateController from "../controllers/users/userCreate.controller";
import userListController from "../controllers/users/userList.controller";

userRoutes.post("/users", userCreateController);
userRoutes.get("/users", userListController);

export default userRoutes;
