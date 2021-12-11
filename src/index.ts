import express from "express";
import type { Application } from "express";
import defaultController from "./controllers/defaultController";

// Env config
import dotenv from "dotenv";
const envPath = process.env?.NODE_ENV || "dev";
dotenv.config({ path: `.env.${envPath}` });

console.log("test", process.env.test);

const app: Application = express();
const port = 3000;

app.get("/", defaultController);

app.listen(port, (): void => {
  console.log(`App is listeing on port: http://localhost:${port}`);
});
