import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email'],
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Please enter a password'],
      select: false,
    },
    fullname: {
      type: String,
      required: [true, 'Please enter your fullname'],
      trim: true,
      minLength: [3, 'Fullname must be at least 3 characters'],
      maxLength: [50, 'Fullname must not be more than 50 characters'],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

//Si existe el modelo User, lo usa, si no, crea uno nuevo
const User = models.User || model('User', UserSchema);

export default User;
