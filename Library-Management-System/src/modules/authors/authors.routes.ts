import express from "express";
import { AuthorController } from "./authors.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { authorValidation } from "./authors.validation";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../../interface/userRole";
const router = express.Router();
router.post(
  "/authors",
  auth(USER_ROLE.admin),
  validateRequest(authorValidation.authorValidationSchema),
  AuthorController.createAuthor
);

export const AuthorRoutes = router;
