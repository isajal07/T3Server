const Admin = require("../models/Admin");

export const createAdmin = async (req, res, next) => {
  try {
    const { fullName, password } = req.body;
    const newAdmin = new Admin({ fullName, password });
    const savedAdmin = await newAdmin.save();
    res.status(200).json(savedAdmin);
  } catch (e) {
    res.status(500).send(e);
  }
};

export const signinAdmin = async (req, res, next) => {
  try {
    const { password } = req.body;
    const admin = await Admin.findOne({ password });
    if (!admin) {
      res.status(403).json({ message: "Access Denied!" });
    }
    // TODO: Create and Send Token!
    res.status(200).json(admin);
  } catch (e) {
    res.status(500).send(e);
  }
};
