import { Router } from "express";
import commentController from "../controllers/commentController";

const commentRouter = Router();

commentRouter.route("/comments").get(commentController.getAllComments);

export default commentRouter;
