import { User } from "../../../domain/models/user";
import { userRepository } from "../../../framework/repository/userRepository";

export const userSignup = (userRepository: userRepository) => async (email: string, password: string): Promise<User | null> => {
 const newUser: User = {
  email,
  password,
 }
 const createdUser = await userRepository.create(newUser);
 return createdUser;
}