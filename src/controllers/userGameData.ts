const UserGameData = require("../models/UserGameData");

export const createUserGameData = async (req, res, next) => {
  try {
    console.log(req.body);
    const {name, whitehatScore, blackhatScore, records} = req.body;

    // const { aliasName, team, whiteHatScore, blackHatScore, events, studyId, settingsId, gameMode } = req.body;
    // const newUserGameData = new UserGameData({
    //   aliasName,
    //   team,
    //   whiteHatScore,
    //   blackHatScore,
    //   studyId,
    //   settingsId,
    //   events,
    //   gameMode,
    // });
    // const savedUserGameData = await newUserGameData.save();
    // res.status(200).json(savedUserGameData);
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
