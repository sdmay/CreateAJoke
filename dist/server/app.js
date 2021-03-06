"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var dotenv = require("dotenv");
var express = require("express");
var morgan = require("morgan");
var path = require("path");
var cors = require("cors");
var app = express();
exports.app = app;
var allowedOrigins = ['http://localhost:3000',
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
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    return next();
});
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
app.get('/*', function (req, res) {
    // res.header('Access-Control-Allow-Origin', '*');
    // res.header('Access-Control-Allow-Origin', 'https://ancient-retreat-41425.herokuapp.com');
    //
    // res.header('Access-Control-Allow-Headers', 'accept, authorization, content-type, x-requested-with');
    // res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.sendFile(path.join(__dirname, '../public/index.html'));
});
app.listen(app.get('port'), function () {
    console.log('Angular Full Stack listening on port ' + app.get('port'));
});
//# sourceMappingURL=app.js.map