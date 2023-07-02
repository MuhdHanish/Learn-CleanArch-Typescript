import { Request, Response, NextFunction } from "express";

export const ErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
  if (err) {
    console.error(err.stack);
    res.status(500).json({ message: "Internal server error" });
  } else {
    next();
  }
} 