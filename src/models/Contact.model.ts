import mongoose, { Schema, Document } from "mongoose";

export interface IContactSchema extends Document {
  phoneNumber: string;
  address: string;
}

const ContactSchema: Schema = new Schema(
  {
    phoneNumber: { type: String, required: true },
    address: { type: String, required: false },
  },
  { timestamps: true }
);

const ContactModel = mongoose.model<IContactSchema>("Contact", ContactSchema);
export default ContactModel
