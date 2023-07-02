import { User } from "../../domain/models/user";
import { MongoDBUser } from "../database/models/userModel";

export type userRepository = {
 findByEmail: (email: string) => Promise<User | null>;
 create: (user: User) => Promise<User | null>;
 find: () => Promise<User[] | null>;
 findOne: (user: User) => Promise<User | null>;
}

export const userRepositoryEmpl = (userModel: MongoDBUser): userRepository => {

 const findByEmail = async (email: string): Promise<User | null> => {
  const user = await userModel.findOne({ email });
  return user ? user.toObject() : null;
 };

 const create = async (user: User): Promise<User | null> => {
  const createdUser = await userModel.create(user);
  return createdUser.toObject();
 };
 
 const find = async (): Promise<User[] | null> => {
  const allUsers = await userModel.find();
  return allUsers ? allUsers.map((user) => user.toObject()) : null;
 };

 const findOne = async (user: User): Promise<User | null> => {
  const currentUser = await userModel.findOne(user);
  return currentUser ? currentUser.toObject() : null;
 };

 return {
  findByEmail,
  create,
  find,
  findOne
 };
 
}