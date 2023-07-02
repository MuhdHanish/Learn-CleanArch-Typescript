import { Request, Response, Router } from "express";
import { signupController } from "../controller/userSignupController";
const router = Router();

router.post('/signup', signupController);

export default router;