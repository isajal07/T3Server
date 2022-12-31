import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const TestSchema = new Schema(
  {
    someText: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const Test = mongoose.model("test", TestSchema);

module.exports = Test;
