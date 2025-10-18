import { Router } from "express";
import userController from "../controller/user.controlllers.js";
import {
  validate,
  validateUserId,
} from "../middlewares/validation.middlewares.js";
import { userSchema } from "../schema/user.schema.js";

const router = Router();

router.post(
  "/users",
  validate(userSchema),
  userController.createUserController
);

router.get("/users", userController.findAllUserController);
router.get(
    "/users/:id",
     validateUserId,
     userController.findUseByIdController
    );

router.patch(
  "/users/:id",
  validateUserId,
  userController.updateUserController
);

router.delete(
  "/users/:id",
  validateUserId,
  userController.deleteUserController
);

export default router;
