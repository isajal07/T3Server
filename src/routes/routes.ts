import * as express from 'express';
import * as testController from '../controllers/test';

const router = express.Router()

const setupREST = (router) => {
    return ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'].reduce((ac, i) => {
        ac[i] = (route, ...fns) => router[i.toLowerCase()](route, ...fns);
        return ac;
    }, {} as any)
};

const { GET, POST, PUT, DELETE, PATCH } = setupREST(router);

// GET('/',(req,res)=>{
// res.json({message:'Review app server is up an running'})
// })
//test contollers
POST('/add', testController.addText);
PUT('/add/:id', testController.updateText)
// POST('/signin', userController.userSignIn);

module.exports = router