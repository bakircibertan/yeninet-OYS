import { Router } from "express";
import { createOlt, deleteOlt, getAllOlts, updateOlt  } from "./olt.controller.js";
import { validate } from "../../middlewares/validate.js";
import { createOltSchema } from "./validation/olt.validation.js";

const router = Router();

router.get("/", getAllOlts);     
router.post(
    "/",
    validate(createOltSchema),
    createOlt
);
router.put(
    "/:id",
    validate(createOltSchema),
    updateOlt
);
router.delete("/:id", deleteOlt);

export default router;
