import { User } from "../../../domain/models/user";
import { userRepository } from "../../../framework/repository/userRepository";

export const findUsers = (userRepository: userRepository) => async (): Promise<User[] | null> => {
 const users = await userRepository.find();
 return users;
}
