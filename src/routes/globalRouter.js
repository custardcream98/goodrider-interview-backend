import express from "express";
import routes from "../../routes";
import { loadQuestion, initQuestion } from "./questionsRouter";

const globalRouter = express.Router();

// globalRouter.get(routes.questionsInit, initQuestion);
globalRouter.get(routes.questions, loadQuestion);

export default globalRouter;
