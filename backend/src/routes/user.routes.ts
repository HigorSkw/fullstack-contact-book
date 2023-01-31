import { Router } from "express";

const userRoutes = Router();

import userCreateController from "../controllers/users/userCreate.controller";
import userListController from "../controllers/users/userList.controller";
import userListOneController from "../controllers/users/userListOne.controller";

userRoutes.post("", userCreateController);
userRoutes.get("", userListController);
userRoutes.get("/me", userListOneController);

export default userRoutes;
