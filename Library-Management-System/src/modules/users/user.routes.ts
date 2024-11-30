import express from "express";
import { UserController } from "./user.controller";
const router = express.Router();

router.post("/create-user", UserController.createUser);
router.post("/borrow", UserController.borrowBook);
router.post("/return-book", UserController.returnBook);

export const UserRoutes = router;
