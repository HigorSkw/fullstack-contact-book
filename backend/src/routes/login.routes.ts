import { Router } from "express";

const loginRouter = Router();

import loginController from "../controllers/login/login.controller";

loginRouter.post("", loginController);

export default loginRouter;
