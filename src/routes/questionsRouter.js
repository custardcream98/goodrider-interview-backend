import { load, init } from "../controller/questionsController";

export const loadQuestion = (req, res) => {
  // const {
  //   params: { qid },
  // } = req;
  res.json(load());
};

export const initQuestion = (req, res) => {
  res.json(init());
};
