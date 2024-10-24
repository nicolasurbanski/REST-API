import { Router } from "express";
export const router = Router();
import { userController } from "../controllers/user.js";

router.post('/register', userController.registerUser)
router.post('/login', userController.login)

