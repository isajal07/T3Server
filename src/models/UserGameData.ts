import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserGameDataSchema = new Schema(
  {
    aliasName: {
      type: String,
      required: true,
    },
    team: {
      type: String,
      required: true,
    },
    whiteHatScore: {
      type: Number,
      required: true,
    },
    blackHatScore: {
      type: Number,
      required: true,
    },
    events: [
      {
        eventName: {
          type: String,
          required: true,
        },
        time: {
          type: String,
          required: true,
        },
        building: {
          type: String, //Name of 2 building
        },
        rule: {
          type: String, //Shape, color, size
        },
        advisor: {
          type: String, //Human or AI
        },
        latency: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

const UserGameData = mongoose.model("UserGameData", UserGameDataSchema);

module.exports = UserGameData;
