import express from "express";
import type { Application } from "express";
import defaultController from "./controllers/defaultController";

const app: Application = express();
const port = 3000;

app.get("/", defaultController);

app.listen(port, (): void => {
  console.log(`App is listeing on port: http://localhost:${port}`);
});
