// Importing dependencies
import mongodb from 'mongodb';
import { MongoClient, Db ,Document ,WithId, FindCursor, AggregationCursor , Collection} from 'mongodb';

const uri:string = process.env.MONGO_DB_TRENDS_PROJECT as unknown as string;
const client = new MongoClient(uri);



 async function getTrends(countryArg: string,dateArg: string):Promise<Document[]>{
    try {
        const database: Db = client.db('finder_twitter');
        const trends: Collection<Document> = database.collection('country_trends');
        // Query for a movie that has the title 'Back to the Future'
        let start:Date = new Date(dateArg);
        start.setHours(0,0,0,0);
        let end:Date = new Date(dateArg);
        end.setHours(23,59,59,999);
        console.log("start date:"+start);
        console.log("end date:"+end);
     

        // db.employees.aggregate([ 
        //     { $match:{ gender:'male'}}, 
        //     { $group:{ _id:'$department.name', totalEmployees: { $sum:1 } } 
        // }])


        const cursor: AggregationCursor<Document> = 
        trends.aggregate([ 
            {$match:{ country: countryArg, created_at: {$gte: start,$lte: end}}},
            {$group:{_id:'$_id' , totalTrends: {$sum:'1'}}}
        ]);
          
        const results: Document[]= await cursor.toArray();
        return results;
      } finally {
        // Ensures that the client will close when you finish/error
      
      }
}


export {getTrends}


 

