import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import proxy from "express-http-proxy";

config();

const expressApp = express();

expressApp.use(
  cors({
    origin: ["http://localhost:5173", process.env.URL_FRONT],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "reset",
      "pos",
      "confirm",
    ],
    methods: ["GET", "PUT", "POST", "DELETE"],
    credentials: true,
  })
);

expressApp.use(bodyParser.urlencoded({ extended: true }));
expressApp.use(bodyParser.json());
expressApp.use(cookieParser());
expressApp.use(morgan("dev"));

//ROUTAS
expressApp.use(
  "/api/users",
  proxy("http://localhost:3001", {
    proxyReqPathResolver: (req) => `${req.url}`,
  })
);
expressApp.use(
  "/api/auth",
  proxy("http://localhost:3002", {
    proxyReqPathResolver: (req) => `${req.url}`,
  })
);

expressApp.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", "*");
  next();
});

export default expressApp;
