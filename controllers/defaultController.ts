import type { Request, Response } from "express";

export default (req: Request, res: Response): void => {
  res.send("Hello, World!");
};
