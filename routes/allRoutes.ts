import express from 'express';
import controllers from '../controllers/api.ts';
import { LoginSchema, RegisterSchema, ValidateJoi } from '../middleware/joi.ts';

const routes = express.Router();
routes.get('/', controllers.home);
routes.get('/login', ValidateJoi(LoginSchema), controllers.login);
routes.get('/register', ValidateJoi(RegisterSchema), controllers.register);
routes.get('/logout', controllers.logout);

export default routes;
