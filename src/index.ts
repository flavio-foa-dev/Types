import express, { Request, Response } from "express";
import statusCodes from "./domain/trybe-type/express/statusCodes";
import 'express-async-errors'
import BooksRouters from './domain/trybe-type/express/routers/routerBooks'
import { httpError } from './domain/trybe-type/express/middlewares/error'
const app = express();

app.use(express.json());

const PORT = 3000;

app.get('/', (req: Request, res: Response) => {
  res.status(statusCodes.OK).send("Express TypeScript")
})

app.use(BooksRouters)

app.use(httpError)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
})