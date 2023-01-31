const User = require("../models/User");

export const createUser = async (req, res, next) => {
  try {
    const { fullName, password } = req.body;
    const newUser = new User({ fullName, password });
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (e) {
    res.status(500).send(e);
  }
};

export const signinUser = async (req, res, next) => {
  try {
    const { password } = req.body;
    const user = await User.findOne({ password });
    if (!user) {
      res.status(403).json({ message: "Access Denied!" });
    }
    // TODO: Create and Send Token!
    res.status(200).json(user);
  } catch (e) {
    res.status(500).send(e);
  }
};
