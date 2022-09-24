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
const uri = process.env.MONGO_DB_TRENDS_PROJECT;
const client = new mongodb_1.MongoClient(uri);
function getTrends(countryArg, dateArg) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let dateParm = new Date(dateArg);
            const database = client.db('finder_twitter');
            const trends = database.collection('country_trends');
            // Query for a movie that has the title 'Back to the Future'

            var first = new ISODate("2020-01-04");
            trends.find({country: countryArg, StartDate: {$gte: first}});


            const cursor = trends.find({country: countryArg, StartDate: {$gte: first}});
            const results = yield cursor.toArray();
            return results;
        }
        finally {
            // Ensures that the client will close when you finish/error
            yield client.close();
        }
    });
}
exports.getTrends = getTrends;
