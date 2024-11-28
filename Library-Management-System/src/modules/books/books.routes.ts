import express from "express";
import { BookControllers } from "./books.controller";

const router = express.Router();

router.post("/create-book", BookControllers.createBook);
router.put("/borrow/:id", BookControllers.borrowBook);

export const BookRoutes = router;
