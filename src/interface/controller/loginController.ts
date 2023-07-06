import { Request, Response } from "express";
import { userModel } from "../../framework/database/models/userModel";
import { userRepositoryEmpl } from "../../framework/repository/userRepository";



export const loginController = async (req:Request, res:Response) => {
 const { email, password } = req.body;
 try {
  let user;
  res.status(200).json({ message: "Login successfull", user });
 } catch (error) {
  res.status(400).json({ message: "Internal server error" });
 }
}