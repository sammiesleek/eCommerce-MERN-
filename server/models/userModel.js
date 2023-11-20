import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
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
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
userSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// userSchema.pre("save", function (next) {
//   // store reference
//   const user = this;
//   if (user._password === undefined) {
//     return next();
//   }
//   bcrypt.genSalt(10, function (err, salt) {
//     if (err) console.log(err);
//     // hash the password using our new salt
//     bcrypt.hash(user._password, salt, function (err, hash) {
//       if (err) console.log(err);
//       user.hashed_password = hash;
//       next();
//     });
//   });
// });

userSchema.pre("save", async function (next) {
  var user = this;
  if (!user.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);

  user.password = await bcrypt.hash(user.password, salt);
});
const User = mongoose.model("User", userSchema);
export default User;
