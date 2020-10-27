import mongoose, { Schema, Document, Model } from "mongoose";

interface IUserSchema extends Document {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
const UserSchema: Schema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: false },
  },
  { timestamps: true }
);

// interface IUserModel extends Model<IUserSchema> {}
// const UserModel = mongoose.model<IUserSchema, IUserModel>("User", UserSchema);
// export default UserModel;

const UserModel = mongoose.model<IUserSchema>("User", UserSchema);
export default UserModel;
