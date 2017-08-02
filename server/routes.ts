import * as express from 'express';
import * as cors from 'cors';

export default function setRoutes(app) {

  const router = express.Router();

  app.use(cors());
  app.options('*', cors());

  // app.use('/gettweets');

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
