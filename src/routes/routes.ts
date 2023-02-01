import * as express from "express";
import * as parameterController from "../controllers/parameters";
import * as userController from "../controllers/user";
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
POST("/createUser", userController.createUser);
GET("/signinUser", userController.signinUser);

//Parameters
GET("/getParameters", parameterController.getParameters);
POST("/createParameters", parameterController.createParameters);
PUT("/updateParameters", parameterController.updateParameters);

//Study
POST("/createStudy", studyController.createStudy);

//UserGameData
POST("/createUserGameData", userGameDataController.createUserGameData);
GET("/getUserGameData/:userGameDataId", userGameDataController.getUserGameData);
GET("/getUserGameDatas", userGameDataController.getUserGameDatas);

module.exports = router;
