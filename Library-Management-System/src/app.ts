import express, { Request, Response } from "express";
const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Stationery Server is running" });
});

export default app;
