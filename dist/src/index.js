import express from 'express';
import * as http from 'http';
import routes from '../routes/allRoutes.ts';
const router = express();
// router.use('/', (req, res, next) => {
//   res.status(200).json({ message: 'Home Page' });
// });
router.use('/', routes);
const httpServer = http.createServer(router);
httpServer.listen(4000, () => {
    console.log('listening');
    return 'listening...';
});
//# sourceMappingURL=index.js.map