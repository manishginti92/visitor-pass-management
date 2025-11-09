import Visitor from "../models/visitorModel.js"; 
//  Create a new visitor
export const createVisitor = async (req, res) => {
  try {
    const { name, phone, purpose } = req.body;
    const visitor = await Visitor.create({
      name,
      phone,
      purpose,
      status: "pending",
      user: req.user._id,
    });
    res.status(201).json(visitor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all visitors (for logged-in user)
export const getVisitors = async (req, res) => {
  try {
    const visitors = await Visitor.find({ user: req.user._id });
    res.json(visitors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get visitor by ID (used for Verify page)
export const verifyVisitor = async (req, res) => {
  try {
    const visitor = await Visitor.findById(req.params.id);
    if (!visitor) {
      return res.status(404).json({ message: "Visitor not found" });
    }
    res.json({ success: true, visitor });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update visitor status (Approve / Check-in)
export const updateVisitorStatus = async (req, res) => {
  try {
    const visitor = await Visitor.findById(req.params.id);
    if (!visitor) {
      return res.status(404).json({ message: "Visitor not found" });
    }
    visitor.status = req.body.status || visitor.status;
    await visitor.save();
    res.json({ message: "Status updated successfully", visitor });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Verify pass (for QR code scanning)
export const verifyPass = async (req, res) => {
  try {
    const { visitorId } = req.body;
    const visitor = await Visitor.findById(visitorId);
    if (!visitor) {
      return res.status(404).json({ message: "Invalid Pass or Visitor not found" });
    }
    res.json({ success: true, visitor });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
