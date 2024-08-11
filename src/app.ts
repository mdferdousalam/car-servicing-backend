import cors from "cors";
import express, { Application, Request, Response } from "express";
import notFound from "./app/middleware/notFound";
import globalErrorHandler from "./app/middleware/globalErrorHandler";

const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send(`Server health is good and running well`);
});
app.use(globalErrorHandler);
app.use(notFound);
export default app;
