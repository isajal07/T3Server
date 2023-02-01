import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const StudySchema = new Schema({
  studyName: {
    type: String,
    required: true,
  },
  scheduledStudyData: {
    type: Date,
    required: true,
  },
  info: {
    type: String
  }
},
{ timestamps: true }
);

const Study = mongoose.model("Study", StudySchema);

module.exports = Study;
