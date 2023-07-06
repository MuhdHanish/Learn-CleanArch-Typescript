import {  Router } from "express";
import { signupController } from "../controller/userSignupController";
import { findController } from "../controller/findController";
import { loginController } from "../controller/loginController";
import { findByEmailController } from "../controller/findByEmailController";
import { deleteAccountController } from "../controller/deleteAccountController";
const router = Router();

// POST 
router.post('/signup', signupController);
router.post('/login', loginController);

// GET
router.get('/find', findController);
router.post('/find', findByEmailController);

// DELETE
router.delete('/delete', deleteAccountController);

export default router;