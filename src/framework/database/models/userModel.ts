import mongoose, { Model, Schema, Document } from "mongoose";
import { User } from "../../../domain/models/user";

export type MongoDBUser = Model<Document<any, any, any> & User>;

const userSchema = new Schema<User>({
 email: String,
 password: String
});

export const userModel: MongoDBUser = mongoose.connection.model<Document<any, any, any> & User>('User', userSchema);