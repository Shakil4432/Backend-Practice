import express, { Request, Response } from "express";
import { BookRoutes } from "./modules/books/books.routes";
import { AuthorRoutes } from "./modules/authors/authors.routes";
import { UserRoutes } from "./modules/users/user.routes";
const app = express();

app.use(express.json());
app.use("/api/books", BookRoutes);
app.use("/api/authors", AuthorRoutes);
app.use("/api/users", UserRoutes);

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Library Management Server is running" });
});

export default app;
