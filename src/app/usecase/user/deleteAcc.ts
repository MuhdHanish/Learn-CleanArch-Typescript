import { User } from "../../../domain/models/user";
import { userRepository } from "../../../framework/repository/userRepository";

export const deleteAcc = (userRepository: userRepository) => async (email: string, password: string): Promise<void> => {
 const deleteUser: User = {
  email,
  password
 }
 userRepository.deleteAcc(deleteUser);
 return;
}