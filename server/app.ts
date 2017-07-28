import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as morgan from 'morgan';
import * as mongoose from 'mongoose';
import * as path from 'path';
import * as cors from 'cors';

const app = express();
const allowedOrigins = ['http://localhost:3000',
  'http://localhost:4200',
  'https://ancient-retreat-41425.herokuapp.com'];
dotenv.load({ path: '.env' });
app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('dev'));
app.use(cors());
app.options('*', cors());
// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Origin', 'https://ancient-retreat-41425.herokuapp.com');
//
//   res.header('Access-Control-Allow-Headers', 'accept, authorization, content-type, x-requested-with');
//   res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
//   next();
// });



// app.use(cors(corsOptions));
// mongoose.connect(process.env.MONGODB_URI);
// const db = mongoose.connection;
// (<any>mongoose).Promise = global.Promise;
//
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
//
//   setRoutes(app);

  app.get('/*', function(req, res) {
    // res.header('Access-Control-Allow-Origin', '*');
    // res.header('Access-Control-Allow-Origin', 'https://ancient-retreat-41425.herokuapp.com');
    //
    // res.header('Access-Control-Allow-Headers', 'accept, authorization, content-type, x-requested-with');
    // res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.listen(app.get('port'), () => {
    console.log('Angular Full Stack listening on port ' + app.get('port'));
  });

export { app };
