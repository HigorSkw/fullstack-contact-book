import express from "express";
import loginRouter from "./routes/login.routes";
import userRoutes from "./routes/user.routes";

const app = express();

app.use(express.json());

app.use("/users/", userRoutes);

app.use("/login/", loginRouter);

app.listen(3000);
