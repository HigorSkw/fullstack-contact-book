import { Router } from "express";
import { authUser } from "../middlewares/authUser.middleware";

const customerRoutes = Router();

import customerCreateController from "../controllers/customer/customerCreate.controller";
import customerDeleteController from "../controllers/customer/customerDelete.controller";
import customerUpdateController from "../controllers/customer/customerUpdate.controller";
import customerListController from "../controllers/customer/customerList.controller";

customerRoutes.post("", authUser, customerCreateController);
customerRoutes.get("", authUser, customerListController);
customerRoutes.delete("/:id", authUser, customerDeleteController);
customerRoutes.patch("/:id", authUser, customerUpdateController);

export default customerRoutes;
