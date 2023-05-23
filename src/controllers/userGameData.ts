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
    const userGameData = await UserGameData.findById(userGameDataId).populate('settingsId', 'name');
    res.status(200).json(userGameData);
  } catch (e) {
    res.status(500).send(e);
  }
};

export const getUserGameDatas = async (req, res, next) => {
  try {
    const userGameDatas = await UserGameData.find();
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
    const userGameData = await UserGameData.find({studyId: studyId, gameMode: "Session"});
    res.status(200).json(userGameData);
  } catch (e) {
    res.status(500).send(e);
  }
};

// Scripts 
export const updateUserGameData = async (req, res, next) => {
  try {
    const filter = { _id: '64447536d281a4eb1d495324' };
    const update = { name: 'cs345.23.13', group: 1 };
    const updateUserGameData = await UserGameData.findOneAndUpdate(filter, update);
    res.status(200).json(updateUserGameData);
  } catch(e) {  
    res.status(500).send(e);
  }
};
export const deleteGameData = async (req, res, next) => {
  try {
    const deleteGameData = await UserGameData.find({ studyId:'643c2a0f8294eb9ab101cec9' }).remove().exec();
    res.status(200).json(deleteGameData);
  } catch (e) {
    res.status(500).send(e);
  }
};
export const sajalTest = async (req, res, next) => {
  try {
    const sajal = {hello: "test"}
    res.status(200).json(sajal)
  } catch(e) {  
    res.status(500).send(e);
  }
};

