const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userControllers");

// ROUTES
router.use(auth);
// GET /tours
router.get("/", getAllUser);

// POST /tours
router.post("/", createUser);

// GET /tours/:tourId
router.get("/:userId", getUserById);

// PUT /tours/:tourId
router.put("/:userId", updateUser);

// DELETE /tours/:tourId
router.delete("/:userId", deleteUser);

module.exports = router;
