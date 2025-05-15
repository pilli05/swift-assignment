import { Router } from "express";
import postController from "../controllers/postController";

const postRouter = Router();

postRouter.route("/posts").get(postController.getAllPosts);

export default postRouter;
