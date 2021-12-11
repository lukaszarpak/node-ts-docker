import express from "express";
import type { Application } from "express";
import defaultController from "./controllers/defaultController";

// Env config
import dotenv from "dotenv";
const envPath = process.env?.NODE_ENV || "dev";
dotenv.config({ path: `.env.${envPath}` });

const app: Application = express();
const port = process.env?.PORT?.toString() || 3000;

app.get("/", defaultController);

app.listen(port, (): void => {
  console.log(`App is listeing on port: http://localhost:${port}`);
});
