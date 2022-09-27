// Importing dependencies
import mongodb from 'mongodb';
import { MongoClient, Db ,Document ,WithId, FindCursor, AggregationCursor , Collection} from 'mongodb';

//declaring unified resource indentifier for DB and client:
const uri:string = process.env.MONGO_DB_TRENDS_PROJECT as unknown as string;
const client = new MongoClient(uri);


//method to get trends matches the filtering parameters:
 async function getTrends(countryArg: string,dateArg: string){
    try {
        const database: Db = client.db('finder_twitter');
        const trends: Collection<Document> = database.collection('country_trends');
        
        //initializing the dates(start date,end date):
        let start:Date = new Date(dateArg);
        start.setHours(0,0,0,0);
        let end:Date = new Date(dateArg);
        end.setHours(23,59,59,999);
     

        //filtering ,grouping and sorting data:
        const cursor: AggregationCursor<Document> = 
        trends.aggregate([
          {
            '$match': {
              'country': countryArg, 
              'created_at': {
                '$gte': start, 
                '$lte': end
              }
            }
          }, {
            '$sort': {
              'created_at': 1, 
              'trend_index': 1
            }
          }, {
            '$group': {
              '_id': {
                '$hour': '$created_at'
              }, 
              'trendsPerHour': {
                '$push': '$$ROOT'
              }
            }
          }, {
            '$sort': {
              '_id': 1
            }
          }
        ]);
          
        const results: Document[]= await cursor.toArray();
        //return an array of documents as the result:
        return results;

      } catch(err) {
        //catching errors and logging them:
        console.log(err);
      }
}

//exporting methods from this module:
export {getTrends}


 

