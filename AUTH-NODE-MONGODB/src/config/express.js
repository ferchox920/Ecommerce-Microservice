import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import authRoutes from "../routes/auth.routes.js";


config();

const expressApp = express();


//TODO: investigar sobre cors
expressApp.use(
  cors({
    origin: "http://localhost:3000", // Solo permitir llamadas desde http://localhost:3000
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "reset",
      "pos",
      "confirm",
    ],
    methods: ["GET", "PUT", "POST", "DELETE"], // Agregamos los métodos permitidos
  })
);
expressApp.use(bodyParser.urlencoded({ extended: true }));
expressApp.use(bodyParser.json());
expressApp.use(cookieParser());
expressApp.use(morgan("dev"));

//ROUTAS

expressApp.use('', authRoutes)


expressApp.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", "*");
  next();
});

export default expressApp;
