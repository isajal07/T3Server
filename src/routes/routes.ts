import * as express from "express";
import * as settingsController from "../controllers/settings";
import * as adminController from "../controllers/admin";
import * as userGameDataController from "../controllers/userGameData";
import * as studyController from "../controllers/study";

const router = express.Router();

const setupREST = (router) => {
  return ["GET", "POST", "PUT", "DELETE", "PATCH"].reduce((ac, i) => {
    ac[i] = (route, ...fns) => router[i.toLowerCase()](route, ...fns);
    return ac;
  }, {} as any);
};

const { GET, POST, PUT, DELETE, PATCH } = setupREST(router);

//Users
POST("/createAdmin", adminController.createAdmin);
POST("/signinAdmin", adminController.signinAdmin);

//Settings
GET("/getSettings", settingsController.getSettings);
POST("/createSettings", settingsController.createSettings);
PUT("/updateSettings/:settingsId", settingsController.updateSettings);
PUT("/selectSettings/:settingsId", settingsController.selectSettings);
GET("/getSelectedSettings", settingsController.getSelectedSettings);

//Study
POST("/createStudy", studyController.createStudy);
GET("/getStudies", studyController.getStudies);
PUT("/selectStudy/:studyId", studyController.selectStudy);
GET("/getSelectedStudy", studyController.getSelectedStudy);

//UserGameData
POST("/createUserGameData", userGameDataController.createUserGameData);
GET("/getUserGameDatas", userGameDataController.getUserGameDatas);
GET("/getUserGameData/:userGameDataId", userGameDataController.getUserGameData);
GET("/getUserGameData/studyId/:studyId", userGameDataController.getUserGameDataByStudyId);

module.exports = router;
