import express from "express";
import { ServiceControllers } from "./service.controller";
import validateRequest from "../../middleware/validateRequest";
import { createServiceSchema, updateServiceSchema } from "./service.schema";
import requireAuth from "../../middleware/requireAuth";
import { Roles } from "../shared/user.enumeration";
import { slotSchema } from "../slot/slot.schema";
import { SlotControllers } from "../slot/slot.controller";

const router = express.Router();

router.post(
    "/",
    validateRequest(createServiceSchema),requireAuth(Roles.ADMIN),
    ServiceControllers.createService
);
router.post(
  "/slots",
  requireAuth(Roles.ADMIN),
  validateRequest(slotSchema),
  SlotControllers.createSlot
);
router.get("/:id", ServiceControllers.getServiceById);
router.get("/", ServiceControllers.getAllServices);
router.put(
  "/:id",
    validateRequest(updateServiceSchema),
  requireAuth(Roles.ADMIN),
  ServiceControllers.updateService
);
router.delete(
  "/:id",
  requireAuth(Roles.ADMIN),
  ServiceControllers.deleteService
);


export const ServiceRoutes = router;
