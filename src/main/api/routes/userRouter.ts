import { Router } from "express";
import userController from "../controllers/userController";

const userRouter = Router();

userRouter.route("/users").get(userController.getAllUsers);
userRouter.route("/users/:userId").get(userController.getUserById);
userRouter.route("/users/:userId").delete(userController.deleteUserById);
userRouter.route("users/deleteAllUsers").delete(userController.deleteAllUsers);

export default userRouter;
