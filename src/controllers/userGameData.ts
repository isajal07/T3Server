const UserGameData = require("../models/UserGameData");

export const createUserGameData = async (req, res, next) => {
  try {
    let { name, whitehatScore, blackhatScore, records, studyId, settingsId, gameMode } = req.body;
    
    // Covnvert array to strings
    records = records.map(record => {
      return {
        ...record,
        eventModifiers: record.eventModifiers.toString()
      }
    })

    const newUserGameData = new UserGameData({
      name, whitehatScore, blackhatScore, records, studyId, settingsId, gameMode
    });
    const savedUserGameData = await newUserGameData.save();
    res.status(200).json(savedUserGameData);
  } catch (e) {
    res.status(500).send(e);
  }
};

export const getUserGameData = async (req, res, next) => {
  try {
    const { userGameDataId } = req.params;
    const userGameData = await UserGameData.findById(userGameDataId);
    res.status(200).json(userGameData);
  } catch (e) {
    res.status(500).send(e);
  }
};

export const getUserGameDatas = async (req, res, next) => {
  try {
    const userGameDatas = await UserGameData.find({});
    //TODO: Pagination and sorting 
    //TODO: get data of a specific test. 
    res.status(200).json(userGameDatas);
  } catch (e) {
    res.status(500).send(e);
  }
};

export const getUserGameDataByStudyId = async (req, res, next) => {
  try {
    const { studyId } = req.params;
    const userGameData = await UserGameData.find({studyId: studyId});
    res.status(200).json(userGameData);
  } catch (e) {
    res.status(500).send(e);
  }
};
