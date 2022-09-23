import {Application ,Request ,Response ,NextFunction} from "express";
import express from "express";
import {getTrends} from "./controller";

const app: Application = express();
const port: number = process.env.TRENDS_PROJECT_port as unknown as number || 8080;


app.get("/search",(req:Request , res:Response , next:NextFunction)=>{
    let country:string=req.query as unknown as string;
    let date:string=req.query as unknown as string;

    //validating the data:
    if(country=="" && date==""){
        res.status(400).send("required data(country ,date)!");
    }

    //using getter method here to get all the spicified data:
    res.status(200).send(getTrends(country,date));
})

//endpoint to check for service health:
app.get("/health",(req: Request, res: Response ,next: NextFunction)=>{
    res.status(200).send("ok!");
})

    //main endpoint:
app.get("/",(req:Request , res:Response , next:NextFunction)=>{
    res.status(200).send("api/v0/");
})

app.listen(port,()=>{
    console.log(`server running on: http://localhost:${port}`)
})
