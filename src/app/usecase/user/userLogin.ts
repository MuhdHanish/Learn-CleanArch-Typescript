import { User } from "../../../domain/models/user";
import { userRepository } from "../../../framework/repository/userRepository";

export const userLogin = (userRepository: userRepository) => async (email: string, password: string): Promise<User | null> =>{
 const userData: User = {
  email,
  password
 }
 const user = await userRepository.findOne(userData);
 return user;
}