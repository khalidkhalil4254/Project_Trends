//importing dependencies:
import {Application ,Request ,Response ,NextFunction} from "express";
import {getTrends} from "./controller";
import bodyParser from 'body-parser';
import express from "express";
import cors from 'cors';

//declaring the app and port number:
const app: Application = express();
const port: number = process.env.TRENDS_PROJECT_port as unknown as number || 8080;


//using request bodyparser:
app.use(bodyParser.json());
//allowing only frontend (origin) to access this service with specified previliges:
  app.use(cors({
    allowedHeaders: [
      'Origin','Content-Type', 'Accept'
    ],
    methods: 'GET,HEAD,OPTIONS,POST',
    preflightContinue: true,
    origin: '*',
  }));



//declaring endpoints of application:
app.get("/search",(req:Request , res:Response , next:NextFunction)=>{
    let {trend_Country}=req.query;
    let {trend_Date}=req.query;
    
    //validating the data:
    if(!req.query.trend_Country || !req.query.trend_Date){
        res.status(400).send("required (country , date) data!");
    }

    //using getter method here to get all the trends with spicified data:
    getTrends(trend_Country as string,trend_Date as string).then((data)=>{
            res.status(200).send(data);
    }).catch((err)=>{})

})

//endpoint to check for service health:
app.get("/health",(req: Request, res: Response ,next: NextFunction)=>{
    res.status(200).send("ok!");
})

//main endpoint:
app.get("/",(req:Request , res:Response , next:NextFunction)=>{
    res.status(200).send("api/v0/");
})

//application listens on port 8080:
app.listen(port,()=>{
    console.log( `server running http:/localhost:${port}` );
    console.log( `press CTRL+C to stop server` );
})
