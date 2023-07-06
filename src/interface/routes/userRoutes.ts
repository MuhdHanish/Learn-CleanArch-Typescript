import { Request, Response, Router } from "express";
import { signupController } from "../controller/userSignupController";
import { findController } from "../controller/findController";
const router = Router();

// POST 
router.post('/signup', signupController);
router.post('/login',)

// GET
router.get('/find', findController);

export default router;