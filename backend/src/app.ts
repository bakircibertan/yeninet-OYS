import express from "express";
import oltRoutes from "./modules/olt/olt.routes.js";
import { errorHandler } from "./middlewares/error-handler.js";
import morgan from "morgan";
import userRoutes from "./modules/user/user.routes.js";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
const app = express();
const limiter = rateLimit({

    windowMs: 15 * 60 * 1000,

    limit: 100,

    message: {

        success: false,

        message: "Çok fazla istek gönderdiniz."

    }

});
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/olts", oltRoutes);
app.use("/api/users", userRoutes);
app.get("/", (req, res) => {
  res.send("YeniNet NMS API Çalışıyor 🚀");
});
app.use(errorHandler);
export default app;