import express from "express";
import {
  createVisitor,
  getVisitors,
  verifyVisitor,
  updateVisitorStatus,
  verifyPass,
} from "../controllers/visitorController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();
router.get("/", protect, getVisitors);
router.post("/", protect, createVisitor);
router.put("/:id/status", protect, updateVisitorStatus);
router.get("/verify/:id", verifyVisitor);
router.post("/verify-pass", verifyPass);

export default router;
