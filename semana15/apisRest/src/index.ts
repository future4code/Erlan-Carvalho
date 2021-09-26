import express, {Response, Request} from "express";
import cors from "cors";
import { users } from "./data";


const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, ()=>{
    console.log("Server is runig at http://localhost:3003")
});

app.get("/users", (res:Response, req:Request)=>{

try{

}catch(error){
    res 
}

})