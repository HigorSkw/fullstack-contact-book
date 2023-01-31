import { Router } from "express";
import { authUser } from "../middlewares/authUser.middleware";

const userRoutes = Router();

import userCreateController from "../controllers/users/userCreate.controller";
import userListController from "../controllers/users/userList.controller";
import userListOneController from "../controllers/users/userListOne.controller";
import userDeleteController from "../controllers/users/userDelete.controller";
import userUpdateController from "../controllers/users/userUpdate.controller";

userRoutes.post("", userCreateController);
userRoutes.get("", authUser, userListController);

userRoutes.delete("/me", authUser, userDeleteController);
userRoutes.get("/me", authUser, userListOneController);
userRoutes.patch("/me", authUser, userUpdateController);

export default userRoutes;
