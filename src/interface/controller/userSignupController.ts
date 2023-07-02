import { Request, Response } from "express";
import { userModel } from "../../framework/database/models/userModel";
import { userRepositoryEmpl } from "../../framework/repository/userRepository";
import { userSignup } from "../../app/usecase/user/userSignup";

const userRepository = userRepositoryEmpl(userModel);

export const signupController = async(req: Request, res: Response) => {
 const { email, password } = req.body;
 try {
  const user = await userSignup(userRepository)(email, password);
  res.status(201).json({ message: "Signup successfull", user });
 } catch (error) {
  res.status(500).json({ message: "Internal server error" });
 }
}