const UserGameData = require("../models/UserGameData");

const res = {
  "name": "sjl",
  "role": 0,
  "teammateSpecies": 0,
  "dayAndTime": "3/1/2023 1:59:13 AM",
  "gameDifficulty": 0,
  "whitehatScore": 0.0,
  "blackhatScore": 2200.0,
  "records": [
      {
          "secondsFromStart": 0.0,
          "eventName": "StartWave",
          "eventModifiers": [
              ""
          ]
      },
      {
          "secondsFromStart": 5.600966453552246,
          "eventName": "SetNewMaliciousRule",
          "eventModifiers": [
              "North East Side"
          ]
      },
      {
          "secondsFromStart": 5.600966453552246,
          "eventName": "SetNewMaliciousRule",
          "eventModifiers": [
              "South West Side"
          ]
      },
      {
          "secondsFromStart": 11.639999389648438,
          "eventName": "MaliciousPacketUnfiltered_BadForUs",
          "eventModifiers": [
              "South West Side"
          ]
      },
      {
          "secondsFromStart": 12.520511627197266,
          "eventName": "MaliciousDestinationClicked",
          "eventModifiers": [
              "South West Side"
          ]
      },
      {
          "secondsFromStart": 12.999655723571778,
          "eventName": "PickedAdvisorType",
          "eventModifiers": [
              "Human"
          ]
      },
      {
          "secondsFromStart": 12.999655723571778,
          "eventName": "PickedAdvisorType",
          "eventModifiers": [
              "Human, MaliciousDestinationClicked latency, 0.48"
          ]
      },
      {
          "secondsFromStart": 13.199999809265137,
          "eventName": "MaliciousPacketUnfiltered_BadForUs",
          "eventModifiers": [
              "North East Side"
          ]
      },
      {
          "secondsFromStart": 13.878996849060059,
          "eventName": "UserBuiltFirewallIncorrectAndSet",
          "eventModifiers": [
              ", PickedAdvisorType latency, 0.88"
          ]
      },
      {
          "secondsFromStart": 13.878996849060059,
          "eventName": "UserBuiltFirewallIncorrectAndSet",
          "eventModifiers": [
              ", AdviceAppeared latency, 13.88"
          ]
      },
      {
          "secondsFromStart": 14.199999809265137,
          "eventName": "MaliciousPacketUnfiltered_BadForUs",
          "eventModifiers": [
              "North East Side"
          ]
      },
      {
          "secondsFromStart": 16.979999542236329,
          "eventName": "MaliciousPacketUnfiltered_BadForUs",
          "eventModifiers": [
              "South West Side"
          ]
      },
      {
          "secondsFromStart": 17.00006675720215,
          "eventName": "AdviceAppeared",
          "eventModifiers": [
              ""
          ]
      },
      {
          "secondsFromStart": 17.00006675720215,
          "eventName": "AdviceAppeared",
          "eventModifiers": [
              ", RuleSpec latency, 17.00"
          ]
      },
      {
          "secondsFromStart": 17.639999389648439,
          "eventName": "MaliciousPacketUnfiltered_BadForUs",
          "eventModifiers": [
              "South West Side"
          ]
      },
      {
          "secondsFromStart": 17.979999542236329,
          "eventName": "MaliciousPacketUnfiltered_BadForUs",
          "eventModifiers": [
              "South West Side"
          ]
      },
      {
          "secondsFromStart": 20.219999313354493,
          "eventName": "MaliciousPacketUnfiltered_BadForUs",
          "eventModifiers": [
              "North East Side"
          ]
      }
  ]
}

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
