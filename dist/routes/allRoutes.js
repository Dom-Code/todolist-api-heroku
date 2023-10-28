import express from 'express';
import controllers from '../controllers/api.ts';
const routes = express.Router();
routes.get('/', controllers.home);
routes.get('/login', controllers.login);
routes.get('/logout', controllers.logout);
export default routes;
//# sourceMappingURL=allRoutes.js.map