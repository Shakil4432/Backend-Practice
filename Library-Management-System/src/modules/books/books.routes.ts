import express from "express";
import { BookControllers } from "./books.controller";

const router = express.Router();

router.post("/create-book", BookControllers.createBook);

export const BookRoutes = router;
