import express from "express";
import {
  userSignup,
  userLogin,
  loggedIn,
} from "../controllers/userController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

//POST - signup
router.post("/signup", userSignup);

//POST - login
router.post("/login", userLogin);

//GET - protected route
router.get("/me", auth, loggedIn);

export default router;
