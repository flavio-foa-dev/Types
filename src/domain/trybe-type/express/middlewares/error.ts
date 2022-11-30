import { NextFunction, Request, Response } from "express";

export const httpError = (err: Error, req: Request, res: Response, next: NextFunction ) => {
  const {name, message, details} = err as any
  console.log(`name: ${name}, message: ${message}, details: ${details}`)

  switch (name) {
    case 'BadRequestError':
      res.status(400).json({ message });
      break;
    case 'ValidationError':
      res.status(400).json({ message: details[0].message });
      break;
    case 'NotFoundError':
      res.status(404).json({ message });
      break;
    case 'ConflictError':
      res.status(409).json({ message });
      break;
    default:
      console.error(err);
      res.sendStatus(500);
  }
  next();
}


