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
    studyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Study'
    },
    settingsId:{
      type:  mongoose.Schema.Types.ObjectId,
      ref: 'Settings'
    },
    gameMode: {
      type: String,
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
          type: Number, //Name of 2 building
          enum : [1,2],
        },
        rule: {
          type: String, //Shape, color, size
        },
        advisor: {
          type: Number, //Human or AI
          enum : [1,2], 
        },
        latency: {
          type: Number,
        },
      },
    ],
  },
  { timestamps: true }
);

const UserGameData = mongoose.model("UserGameData", UserGameDataSchema);

module.exports = UserGameData;
