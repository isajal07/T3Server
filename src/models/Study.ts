import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const StudySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  isSelected: {
    type: Boolean,
    required: true,
  },
  info: {
    type: String
  },
  createdBy:{
    type: String,
  },
  numberOfSettings:{
    type: Number,
    default: 1,
  },
  createdAt: {
    type: Date,
    require:true
  }
},
{ timestamps: true }
);

const Study = mongoose.model("Study", StudySchema);

module.exports = Study;
