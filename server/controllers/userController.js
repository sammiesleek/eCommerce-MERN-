import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import generateTokens from "../utils/generateTokens.js";

// @desc Auth user & get token
// @route POST /api/users/auth
// @access public
export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    generateTokens(res, user._id);

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      // token: token,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});
// @desc resgister user
// @route POST /api/users
// @access public
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, phone, address } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("This Email has been used");
  } else {
    const user = await User.create({
      name,
      email,
      password,
      phone,
      address,
    });

    if (user) {
      generateTokens(res, user._id);

      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(400);
      throw new Error("invalid user data");
    }
  }
});
// @desc logout user
// @route POST /api/users/logout
// @access private
export const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", { httpOnly: true, expires: new Date(0) });
  res.status(200).json({ message: "Loggged out" });
});
// @desc get user's profile
// @route GET /api/users/profile
// @access private
export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      address: user.address,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("Profile not found");
  }
});
// @desc get user's profile
// @route PUT /api/users/profile
// @access private
export const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    (user.name = req.body.name || user.name),
      (user.email = req.body.email || user.email);
    user.phone = req.body.phone || user.phone;
    user.address = req.body.address || user.address;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();
    res.status(200).json({
      _id: updatedUser._d,
      name: updatedUser.name,
      email: updatedUser.email,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc get all user's profile
// @route GET /api/users
// @access private/admin
export const getUsers = asyncHandler(async (req, res) => {
  res.send(" get user");
});
// @desc get user by ID
// @route GET /api/users/:id
// @access private/admin
export const getUserById = asyncHandler(async (req, res) => {
  res.send(" get user by id");
});
// @desc get all user's profile
// @route put /api/users/:id
// @access private/admin
export const deleteUser = asyncHandler(async (req, res) => {
  res.send(" delete user");
});
// @desc update user's profile
// @route PUT /api/users/:id
// @access private/admin
export const updateUser = asyncHandler(async (req, res) => {
  res.send(" update user");
});

// export {
//   authUser,
//   registerUser,
//   logoutUser,
//   getUserProfile,
//   updateUserProfile,
//   getUsers,
//   getUserById,
//   deleteUser,
//   updateUser,
// };
