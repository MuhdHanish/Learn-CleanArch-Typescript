import { Request, Response, Router } from "express";
import { signupController } from "../controller/userSignupController";
import { findController } from "../controller/findController";
import { loginController } from "../controller/loginController";
const router = Router();

// POST 
router.post('/signup', signupController);
router.post('/login', loginController);

// GET
router.get('/find', findController);

export default router;