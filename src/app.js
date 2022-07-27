import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import logger from "morgan";
import helmet from "helmet";
import cors from "cors";

import globalRouter from "./routes/globalRouter";

const app = express();

// CORS Whitelist
const whitelist = [""];
const corsOptions = {
  origin: (origin, callback) => {
    callback(null, true);
    // if (whitelist.indexOf(origin) !== -1) {
    //   callback(null, true);
    // } else {
    //   callback(new Error("Not Allowed Origin"));
    // }
  },
};

// middleware setup
app.use(logger("dev"));
app.use(cors(corsOptions)); // allow CORS
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", globalRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err,
  });
});

export default app;
