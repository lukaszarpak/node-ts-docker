import express from "express";
import type { Application } from "express";

const app: Application = express();
const port = "";

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, (): void => {
  console.log(`App is listeing on port: http://localhost:${port}`);
});
