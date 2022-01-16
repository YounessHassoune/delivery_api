import express, { Request, Response } from "express";
import { connectDB } from "@config/database";
import compression from "compression";
import { limiter } from "@middlewares/limiter";
import "dotenv/config";
import { User, Manager, DeliveryManager } from "@models/index";
import { handleError, notFound } from "@middlewares/error";
import { sentery } from "@config/sentry.server.config";
import { admin, driver, manager, deliverychef } from "@routes/index";

const app = express();

sentery.init(app);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(limiter);

app.use(sentery.requestHandler);
app.use(sentery.tracingHandler);

// All routes should live here
app.use("/api/admin", admin);
app.use("/api/deliverymanager", driver);
app.use("/api/manger", manager);
app.use("/api/driver", deliverychef);

app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

app.post("/user", async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const user = await User.create({ name, email });
  res.json(user);
});

app.post("/manager", async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const manager = await Manager.create({ name, email, password });
  res.json(manager);
});

app.post("/managerDelevry", async (req: Request, res: Response) => {
  const { name, email, password, manager } = req.body;
  const managerDelevry = await DeliveryManager.create({
    name,
    email,
    password,
    manager,
  });
  res.json(managerDelevry);
});

app.use(sentery.errorHandler);

// fallthrough error handler
// handling 404 errors
app.use(notFound);
// // handling internal server errors
app.use(handleError);

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  console.log(`🚀 Server ready at: http://localhost:${port}`);
  const { connection } = await connectDB();
  console.log(`👋 Connected to database successfully: ${connection.name}`);
});
