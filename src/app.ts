import cors from "cors";
import express, { Application, Request, Response } from "express";
import notFound from "./app/middleware/notFound";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import router from "./app/routes";

const app: Application = express();
//parser
// Configure payload size limits
app.use(express.json({ limit: "10mb" })); // Adjust the limit as needed
app.use(express.urlencoded({ extended: true, limit: "10mb" })); // Adjust the limit as needed

// Define allowed origins
const allowedOrigins = [
  "http://localhost:3000", // Development frontend
  "http://localhost:5000", // Production frontend
  "http://localhost:5173",
  "http://localhost:3000",
];

// Configure CORS options
const corsOptions = {
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true, // Allow cookies to be sent
};

// Apply CORS middleware
app.use(cors(corsOptions));

app.get("/", (req: Request, res: Response) => {
  res.send(`Server health is good and running well`);
});
app.use("/api", router);
app.use(globalErrorHandler);
app.use(notFound);
export default app;
