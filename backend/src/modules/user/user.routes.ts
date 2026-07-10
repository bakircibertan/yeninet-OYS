import { Router } from "express";
import { login, register } from "./user.controller.js";
import { validate } from "../../middlewares/validate.js";
import { loginSchema, refreshTokenSchema, registerSchema ,  } from "./validation/user.validation.js";
import { refreshToken } from "./user.controller.js";
import {me} from "./user.controller.js";
import { auth } from "../../shared/middleware/auth.middleware.js";
const router = Router();

router.post(
    "/register",
    validate(registerSchema),
    register
);

router.post(
    "/login",
    validate(loginSchema),
    login
);


router.post(
    "/refresh",
    validate(refreshTokenSchema),
    refreshToken
);


router.get(
    "/me",
    auth,
    me
);
export default router;