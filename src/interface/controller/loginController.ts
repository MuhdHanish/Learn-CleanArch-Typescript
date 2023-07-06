import { Request, Response } from "express";
import { userModel } from "../../framework/database/models/userModel";
import { userRepositoryEmpl } from "../../framework/repository/userRepository";
import { userLogin } from "../../app/usecase/user/userLogin";

const userRepository = userRepositoryEmpl(userModel);

export const loginController = async (req:Request, res:Response) => {
 const { email, password } = req.body;
 try {
  const user = await userLogin(userRepository)(email,password);
  res.status(200).json({ message: "Login successfull", user });
 } catch (error) {
  res.status(400).json({ message: "Internal server error" });
 }
}