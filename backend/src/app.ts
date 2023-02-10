import express, { Request, Response, NextFunction } from "express";
import { AppError } from "./errors/ErrorHTTP";
import customerRoutes from "./routes/customer.routes";
import loginRouter from "./routes/login.routes";
import userRoutes from "./routes/user.routes";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users/", userRoutes);

app.use("/login/", loginRouter);

app.use("/customer/", customerRoutes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  console.error(err);
  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

app.listen(process.env.PORT || 3001);
