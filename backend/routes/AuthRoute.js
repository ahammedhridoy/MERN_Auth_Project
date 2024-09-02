import express from "express";
import {
  authorized,
  createUser,
  forgotPassword,
  loginUser,
  logout,
  resetPassword,
  verifyUser,
} from "../controllers/AuthController.js";

export const router = express.Router();

router.post("/signup", createUser);
router.post("/login", loginUser);
router.post("/forgot", forgotPassword);
router.post("/resetpassword/:token", resetPassword);
router.get("/verify", verifyUser, authorized);
router.get("/logout", logout);
