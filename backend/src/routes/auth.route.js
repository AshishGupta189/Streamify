import express from 'express';
import { signupController, loginController, logoutController, onboardController } from '../controllers/auth.controller.js';
import { protectRoute } from '../middleware/auth.middleware.js';
const router = express.Router();    

router.post("/signup", signupController);
router.post("/login", loginController);
router.post("/logout", logoutController);

router.post("/onboarding", protectRoute, onboardController);

// check if user is logged in
router.get("/me", protectRoute, (req, res) => {
  res.status(200).json({ success: true, user: req.user });
});


export default router;