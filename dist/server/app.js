"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var dotenv = require("dotenv");
var express = require("express");
var morgan = require("morgan");
var path = require("path");
var app = express();
exports.app = app;
dotenv.load({ path: '.env' });
app.set('port', (process.env.PORT || 3000));
app.use('/', express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
// mongoose.connect(process.env.MONGODB_URI);
// const db = mongoose.connection;
// (<any>mongoose).Promise = global.Promise;
//
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
//
//   setRoutes(app);
// Add headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});
app.listen(app.get('port'), function () {
    console.log('Angular Full Stack listening on port ' + app.get('port'));
});
//# sourceMappingURL=app.js.map