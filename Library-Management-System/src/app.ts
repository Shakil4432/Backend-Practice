import express, { Request, Response } from "express";
import { BookRoutes } from "./modules/books/books.routes";
const app = express();

app.use(express.json());
app.use("/api/books", BookRoutes);

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Stationery Server is running" });
});

export default app;
