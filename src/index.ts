import express from 'express';
import * as http from 'http';
import routes from '../routes/allRoutes.ts';
import logging from '../config/logging.ts';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import config from '../config/config.ts';
import errMiddleWare from '../middleware/error.ts';

const NAMESPACE = 'Index';

const router = express();

// Connect to Mongo
mongoose
  .connect(config.mongo.url, config.mongo.options)
  .then((result) => {
    logging.info(NAMESPACE, 'Connected to mongoDB!');
  })
  .catch((err) => {
    logging.error(NAMESPACE, err.message, err);
  });

router.use((req, res, next) => {
  logging.info(
    NAMESPACE,
    `Method: [${req.method}], URL: [$Preq.url], IP: [${req.socket.remoteAddress}]`
  );

  res.on(`finish`, () => {
    logging.info(
      NAMESPACE,
      `Method: [${req.method}], URL: [$Preq.url], IP:[${req.socket.remoteAddress}], STATUS: [${res.statusCode}]`
    );
  });
  next();
});

// parsing request
// injections allows us to send nested json to our API.
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// Rules for our API

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-with, Content-Type, Accept, Authorization,  application/json'
  );

  if (req.method == 'OPTIONS') {
    res.header(
      'Access-Control-Allow-Methods',
      'GET PATCH DELETE POST PUT OPTIONS'
    );
    return res.status(200).json();
  }
  next();
});

// if request body is blank.
// add other errors.
// router.use(errMiddleWare);
router.use('/', routes);

const httpServer = http.createServer(router);
httpServer.listen(4000, () => {
  console.log('listening');
  return 'listening...';
});
