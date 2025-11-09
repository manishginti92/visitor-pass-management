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

//  Get all visitors (for logged-in user)
router.get("/", protect, getVisitors);

// Add new visitor
router.post("/", protect, createVisitor);

// Update visitor status (Approve / Check-in)
router.put("/:id/status", protect, updateVisitorStatus);

//  Get visitor by ID (for verify page)
router.get("/verify/:id", verifyVisitor);

// Verify pass (for QR / manual input)
router.post("/verify-pass", verifyPass);

export default router;
