import { model, Schema } from "mongoose";
import { IUserDocument } from "../../types/user.type";

const userSchema = new Schema<IUserDocument>({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["sale-attendant", "admin", "pharmacist"],
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

const User = model("User", userSchema);

export default User;
