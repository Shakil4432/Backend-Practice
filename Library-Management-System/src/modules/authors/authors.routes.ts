import express from "express";
import { AuthorController } from "./authors.controller";
const router = express.Router();
router.post("/create-author", AuthorController.createAuthor);

export const AuthorRoutes = router;
