"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTrends = void 0;
const mongodb_1 = require("mongodb");
//declaring unified resource indentifier for DB and client:
const uri = process.env.MONGO_DB_TRENDS_PROJECT;
const client = new mongodb_1.MongoClient(uri);
//method to get trends matches the filtering parameters:
function getTrends(countryArg, dateArg) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const database = client.db('finder_twitter');
            const trends = database.collection('country_trends');
            //initializing the dates(start date,end date):
            let start = new Date(dateArg);
            start.setHours(0, 0, 0, 0);
            let end = new Date(dateArg);
            end.setHours(23, 59, 59, 999);
            //filtering ,grouping and sorting data:
            const cursor = trends.aggregate([
                { $match: { country: countryArg, created_at: { $gte: start, $lte: end } } },
                { $group: { _id: { $hour: '$created_at' }, names: { $push: '$name' }, indices: { $push: '$trend_index' }, volumes: { $push: '$tweet_volume' } } },
                { $sort: { _id: 1 } }
            ]);
            const results = yield cursor.toArray();
            //return an array of documents as the result:
            return results;
        }
        catch (err) {
            //catching errors and logging them:
            console.log(err);
        }
    });
}
exports.getTrends = getTrends;
