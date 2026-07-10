import express from "express";
import oltRoutes from "./modules/olt/olt.routes.js";
import { errorHandler } from "./middlewares/error-handler.js";
import morgan from "morgan";
import userRoutes from "./modules/user/user.routes.js";
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use("/api/olts", oltRoutes);
app.use("/api/users", userRoutes);
app.get("/", (req, res) => {
  res.send("YeniNet NMS API Çalışıyor 🚀");
});
app.use(errorHandler);
export default app;