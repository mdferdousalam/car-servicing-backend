import express from "express";

import { Roles } from "../shared/user.enumeration";
import requireAuth from "../../middleware/requireAuth";
import { SlotControllers } from "./slot.controller";

const router = express.Router();

router.post("/", requireAuth(Roles.ADMIN), SlotControllers.createSlot);
router.get("/availability", SlotControllers.getAvailableSlots);


export const SlotRoutes = router;