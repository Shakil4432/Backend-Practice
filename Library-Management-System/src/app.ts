import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import { BookRoutes } from "./modules/books/books.routes";
import { AuthorRoutes } from "./modules/authors/authors.routes";
import { UserRoutes } from "./modules/users/user.routes";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import { AuthRoutes } from "./modules/auth/auth.route";

const app: Application = express();

// Middleware for parsing JSON
app.use(express.json());
app.use(cors());

// API Routes
app.use("/api/v1/user", UserRoutes);
app.use("/api/v1/", BookRoutes);
app.use("/api/v1/", AuthorRoutes);
app.use("/api/v1/auth", AuthRoutes);

// Root Route
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Library Management Server is running" });
});

// 404 Handler for Unknown Routes
app.use((req: Request, res: Response, next: NextFunction) => {
  const error = new Error("Route not found");
  (error as any).statusCode = 404;
  next(error);
});

// Global Error Handler
app.use(globalErrorHandler);

export default app;
