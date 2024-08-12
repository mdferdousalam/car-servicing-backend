import express from "express";
import { ServiceControllers } from "./service.controller";
import validateRequest from "../../middleware/validateRequest";
import { createServiceSchema } from "./service.schema";
import requireAuth from "../../middleware/requireAuth";
import { Roles } from "../shared/user.enumeration";

const router = express.Router();

router.post(
    "/",
    validateRequest(createServiceSchema),requireAuth(Roles.ADMIN),
    ServiceControllers.createService
);


export const ServiceRoutes = router;
