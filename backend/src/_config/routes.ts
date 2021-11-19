import {Router} from 'express';
const userController = require('../features/controller/userController')

const routes = Router();

routes.get("/api/user", userController.selectAllClient);


export default routes;