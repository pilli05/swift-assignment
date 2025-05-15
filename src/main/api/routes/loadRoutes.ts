import { Router } from "express";
import loadController from "../controllers/loadController";

const loadRouter = Router();

loadRouter.route("/load").get(loadController.loadData);

export default loadRouter;
