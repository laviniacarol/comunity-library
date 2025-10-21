import bookController from "../controllers/book.controller.js";
import {
  validate,
  validateBookId,
} from "../middlewares/validation.middleware.js";
import authMiddleware from "../middlewares/auth.middleware.js";

import { Router } from "express";
import { bookSchema } from "../schemas/book.schema.js";

const router = Router();

router.use(authMiddleware);
router.post("/", validate(bookSchema), bookController.createBookController);
router.get("/", bookController.findAllBooksController);
router.get("/search", bookController.searchBooksController);
router.get("/:id", validateBookId, bookController.findBookByIdController);
router.patch("/:id", validateBookId, bookController.updateBookController);
router.delete("/:id", validateBookId, bookController.deleteBookController);

export default router;