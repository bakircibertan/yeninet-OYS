import { Router } from "express";
import { login, register } from "./user.controller.js";
import { validate } from "../../middlewares/validate.js";
import { registerSchema } from "./validation/user.validation.js";

const router = Router();

router.post(
    "/register",
    validate(registerSchema),
    register
);

router.post("/login", login);

export default router;