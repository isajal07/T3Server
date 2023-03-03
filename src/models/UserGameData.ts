import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const RecordSchema = new Schema({
  secondsFromStart: {
    type: Number,
    required: true,
  },
  eventName: {
    type: String,
    required: true,
  },
  eventModifiers: {
    type: String,
  }
});

const UserGameDataSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    whitehatScore: {
      type: Number,
      required: true,
    },
    blackhatScore: {
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
    records: [RecordSchema]
    // events: [
    //   {
    //     eventName: {
    //       type: String,
    //       required: true,
    //     },
    //     time: {
    //       type: String,
    //       required: true,
    //     },
    //     building: {
    //       type: Number, //Name of 2 building
    //       enum : [1,2],
    //     },
    //     rule: {
    //       type: String, //Shape, color, size
    //     },
    //     advisor: {
    //       type: Number, //Human or AI
    //       enum : [1,2], 
    //     },
    //     latency: {
    //       type: Number,
    //     },
    //   },
    // ],
  },
  { timestamps: true }
);

const UserGameData = mongoose.model("UserGameData", UserGameDataSchema);

module.exports = UserGameData;
