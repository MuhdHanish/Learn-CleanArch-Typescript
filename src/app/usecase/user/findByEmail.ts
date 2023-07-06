import { User } from "../../../domain/models/user";
import { userRepository } from "../../../framework/repository/userRepository";

export const findByEmail = (userRepository: userRepository) => async (email: string): Promise<User | null> => {
 const user = userRepository.findByEmail(email);
 return user;
}