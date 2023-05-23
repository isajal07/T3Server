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
    // const filter = { name: '' };

    console.log('cc')
    await UserGameData.findById("64480f1cabaceb7a597937f3").then(async data => 
      {
        const newData = data.records.map((obj, index) => {
          if (obj.eventName === 'AdvisorSelectLatency') {
            const nextObj = data.records[index + 1];
            if (nextObj && nextObj.eventModifiers === 'AI') {
              obj.eventName = 'AISelectLatency';
            } else if (nextObj && nextObj.eventModifiers === 'Human') {
              obj.eventName = 'HumanSelectLatency';
            }
          }
          return obj;
        });

        await UserGameData.findOneAndUpdate({_id: data._id}, {...data, records: newData}).then(dt => {
          console.log(dt)
          res.status(200).json(dt);
        })
      })
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



// const abc = [
//   [
//     { eventName: 'HumanSelectLatency', eventModifiers: '2' },
//     { eventName: 'PickedAdvisorType', eventModifiers: 'Human' },
//     { eventName: 'HumanSelectLatency', eventModifiers: '12' },
//     { eventName: 'PickedAdvisorType', eventModifiers: 'Human' },
//     { eventName: 'AISelectLatency', eventModifiers: '8' },
//     { eventName: 'PickedAdvisorType', eventModifiers: 'AI' },
//   ],
//   [
//     { eventName: 'AISelectLatency', eventModifiers: '1' },
//     { eventName: 'PickedAdvisorType', eventModifiers: 'AI' },
//     { eventName: 'HumanSelectLatency', eventModifiers: '2' },
//     { eventName: 'PickedAdvisorType', eventModifiers: 'Human' },
//     { eventName: 'AISelectLatency', eventModifiers: '8' },
//     { eventName: 'PickedAdvisorType', eventModifiers: 'AI' },
//   ],
// ];

// const result = [
//   [{Human: 2, latency: 14}, {AI: 1, latency: 8},{AI: 2, latency: 9}, {Human: 1, latency: 2},]
// ];


