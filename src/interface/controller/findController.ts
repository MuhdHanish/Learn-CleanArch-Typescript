import { Request, Response } from "express";
import { userModel } from "../../framework/database/models/userModel";
import { userRepositoryEmpl } from "../../framework/repository/userRepository";
import { findUsers } from "../../app/usecase/user/findUsers";

const userRepository = userRepositoryEmpl(userModel);

export const findController = async (req: Request, res: Response) => {
 try {
  const users = await findUsers(userRepository)();
  res.status(200).json(users);
 } catch (error) {
  res.status(500).json({ message: "Internal server error" });
 }
}