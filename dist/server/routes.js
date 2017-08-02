"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
function setRoutes(app) {
    var router = express.Router();
    app.use(cors());
    app.options('*', cors());
    // app.use('/gettweets');
    // Apply the routes to our application with the prefix /api
    app.use('/api', router);
}
exports.default = setRoutes;
//# sourceMappingURL=routes.js.map