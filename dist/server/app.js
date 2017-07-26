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
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});
app.listen(app.get('port'), function () {
    console.log('Angular Full Stack listening on port ' + app.get('port'));
});
//# sourceMappingURL=app.js.map