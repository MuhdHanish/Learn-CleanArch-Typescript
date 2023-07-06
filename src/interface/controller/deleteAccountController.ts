import { Request,Response } from "express";
import { userModel } from "../../framework/database/models/userModel";
import { userRepositoryEmpl } from "../../framework/repository/userRepository";
import { deleteAcc } from "../../app/usecase/user/deleteAcc";

const userRepository = userRepositoryEmpl(userModel);

export const deleteAccountController = async (req: Request, res: Response) => {
 const { email, password } = req.body;
 try {
  const deletedAcc = await deleteAcc(userRepository)(email, password);
  res.status(200).json({ message: "Account deleted successfull", deletedAcc });
 } catch (error) {
  res.status(500).json({ message: "Internal server error" });
 }
}