import * as express from "express";
import * as parameterController from "../controllers/parameters";
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

//Parameters
GET("/getParameters", parameterController.getParameters);
POST("/createParameters", parameterController.createParameters);
PUT("/updateParameters/:parameterId", parameterController.updateParameters);
PUT("/selectParameter/:parameterId", parameterController.selectParameter);
GET("/getSelectedParameters", parameterController.getSelectedParameters);

//Study
POST("/createStudy", studyController.createStudy);
GET("/getStudies", studyController.getStudies);
PUT("/selectStudy/:studyId", studyController.selectStudy);

//UserGameData
POST("/createUserGameData", userGameDataController.createUserGameData);
GET("/getUserGameDatas", userGameDataController.getUserGameDatas);
GET("/getUserGameData/:userGameDataId", userGameDataController.getUserGameData);
GET("/getUserGameData/studyId/:studyId", userGameDataController.getUserGameDataByStudyId);

module.exports = router;
