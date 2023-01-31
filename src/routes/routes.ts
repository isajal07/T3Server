import * as express from 'express';
import * as parameterController from '../controllers/parameters';
const router = express.Router()

const setupREST = (router) => {
    return ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'].reduce((ac, i) => {
        ac[i] = (route, ...fns) => router[i.toLowerCase()](route, ...fns);
        return ac;
    }, {} as any)
};

const { GET, POST, PUT, DELETE, PATCH } = setupREST(router);

//Parameters
POST('/createParameter', parameterController.createParameters);
PUT('/updateParameter', parameterController.updateParameters);

module.exports = router;