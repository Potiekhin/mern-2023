import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  const hashedPassword = password ? bcryptjs.hashSync(password, 10) : "";
  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json({ message: `User ${username} was created!` });
  } catch (err) {
    next(err);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return next(errorHandler(404, "Email not exist"));
    const validPassword = bcryptjs.compareSync(password, user.password);
    if (!validPassword) return next(errorHandler(401, "Invalid Password!"));
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    // return user without password field
    const {password: _, ...newUser} = user._doc
    res.cookie("access_token", token, { httpOnly: true }).status(200).json(newUser);
  } catch (err) {
    next(err);
  }
};
