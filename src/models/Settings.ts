import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const ParameterSchema = new Schema({
  maxWaves: {
    type: Number,
    required: true,
  },
  accuracies: [
    {
      wave: {
        type: Number,
        required: true,
      },
      AICorrectProbability: {
        type: Number,
        required: true,
      },
      humanCorrectProbability: {
        type: Number,
        required: true,
      },
    },
  ],
  penalty: {
    type: Number,
    required: true,
  },
  maliciousPacketProbability: {
    type: Number,
    required: true,
  },
  intervalBetweenPackets: {
    type: Number,
    required: true,
  },
  maxNumberOfPackets: {
    type: Number,
    required: true,
  },
  minIntervalBetweenRuleChanges: {
    type: Number,
    required: true,
  },
  maxIntervalBetweenRuleChanges: {
    type: Number,
    required: true,
  },
  minHumanAdviceTimeInSeconds: {
    type: Number,
    required: true,
  },
  maxHumanAdviceTimeInSeconds: {
    type: Number,
    required: true,
  },
  minAIAdviceTimeInSeconds: {
    type: Number,
    required: true,
  },
  maxAIAdviceTimeInSeconds: {
    type: Number,
    required: true,
  },
  AIRandomSeed: {
    type: Number,
    required: true,
  },
  humanRandomSeed: {
    type: Number,
    required: true,
  },
  difficultyRatio: {
    type: Number,
    required: true,
  },
});

const SettingsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    createdBy:{
      type: String,
      require: true
    },
    note: {
      type: String,
    },
    isSelected:{
      type: Boolean,
      required: true,
    },
    training: ParameterSchema,
    session: ParameterSchema,
  },
  { timestamps: true }
);

const Settings = mongoose.model("Settings", SettingsSchema);

module.exports = Settings;
