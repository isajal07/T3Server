import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;
