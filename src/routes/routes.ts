import * as express from 'express';
import * as parameterController from '../controllers/parameters';
import * as userController from '../controllers/user';
const router = express.Router()

const setupREST = (router) => {
    return ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'].reduce((ac, i) => {
        ac[i] = (route, ...fns) => router[i.toLowerCase()](route, ...fns);
        return ac;
    }, {} as any)
};

const { GET, POST, PUT, DELETE, PATCH } = setupREST(router);

//Users
POST('/createUser', userController.createUser);
GET('/signinUser', userController.signinUser);

//Parameters
GET('/getParameters', parameterController.getParameters);
POST('/createParameters', parameterController.createParameters);
PUT('/updateParameters', parameterController.updateParameters);

module.exports = router;