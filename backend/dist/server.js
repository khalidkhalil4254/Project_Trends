"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("./controller");
const app = (0, express_1.default)();
const port = process.env.TRENDS_PROJECT_port || 8080;
app.get("/search", (req, res, next) => {
    let { trend_Country } = req.query;
    let { trend_Date } = req.query;
    //validating the data:
    if (!req.query.trend_Country || !req.query.trend_Date) {
        res.status(400).send("required data(country ,date)!");
    }
    //using getter method here to get all the spicified data:
    (0, controller_1.getTrends)(trend_Country, trend_Date).then((data) => {
        res.status(200).send(data);
    }).catch((err) => { });
});
//endpoint to check for service health:
app.get("/health", (req, res, next) => {
    res.status(200).send("ok!");
});
//main endpoint:
app.get("/", (req, res, next) => {
    res.status(200).send("api/v0/");
});
app.listen(port, () => {
    console.log(`server running on: http://localhost:${port}`);
});
