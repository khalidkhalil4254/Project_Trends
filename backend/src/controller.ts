// Importing dependencies
import { Schema , model , Types } from 'mongoose';
import mongoose from 'mongoose';
import trend_interface from './trendModel'

// Connecting the database using env variables
mongoose.connect(process.env.MONGO_DB_TRENDS_PROJECT as unknown as string);

//@TODO => declaring the database schema and model:
// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<trend_interface>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    avatar: String
  });
  
  // 3. Create a Model.
  const User = model<trend_interface>('User', userSchema);

//function to get the trends based on country and date specified:
export const getTrends=(country: string,date: string)=>{
    let listOfTrends:string[]=[];
    //@TODO => to be implemented------------
    return listOfTrends;
}




