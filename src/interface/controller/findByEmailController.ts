import { Request, Response } from "express";
import { userModel } from "../../framework/database/models/userModel";
import { userRepositoryEmpl } from "../../framework/repository/userRepository";
import { findByEmail } from "../../app/usecase/user/findByEmail";

const userRepository = userRepositoryEmpl(userModel);

export const findByEmailController = async (req: Request, res: Response) => {
 const { email } = req.body;
 try {
  const user = await findByEmail(userRepository)(email);
  res.status(200).json(user);
 } catch (error) {
  res.status(500).json({ message: "Internal server error" });
 }
}