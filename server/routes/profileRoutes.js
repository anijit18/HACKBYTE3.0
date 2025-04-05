const express = require("express");
const { getProfile, updateProfile, deleteProfile } = require("../controllers/profileController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/:id", authMiddleware, getProfile);
router.put("/:id", authMiddleware, updateProfile);
router.delete('/:id', authMiddleware, deleteProfile);

// // @route   PUT /api/profile/update
// // @desc    Update user profile
// // @access  Private
// router.put("/update", authMiddleware, async (req, res) => {
//     try {
//       const userId = req.user.id;
//       const { name, email, password } = req.body;
  
//       const updateFields = {};
  
//       if (name) updateFields.name = name;
//       if (email) updateFields.email = email;
//       if (password) {
//         const salt = await bcrypt.genSalt(10);
//         updateFields.password = await bcrypt.hash(password, salt);
//       }
  
//       const updatedUser = await User.findByIdAndUpdate(
//         userId,
//         { $set: updateFields },
//         { new: true }
//       ).select("-password");
  
//       res.status(200).json({ message: "Profile updated", user: updatedUser });
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).json({ message: "Server Error" });
//     }
//   });

module.exports = router;
