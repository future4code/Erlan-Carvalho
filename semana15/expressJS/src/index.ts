import express, { Request, Response } from 'express';
import cors from 'cors';
import { countries } from "./data"

const app = express()


app.use(express.json())
app.use(cors())
app.listen(3003, () => {
    console.log("Server is rruning in http://localhost:3003");
});



app.get("/countries", (req: Request, res: Response) => {
    const result = countries.map((nation) => {
        name: nation.name
        id: nation.id
    })

    res.status(200).send(result)
})


app.get("/countries/search", (req: Request, res: Response) => {

    try {
        const result = countries.filter((nation) => {
            return nation.name.includes(req.query.name as string)
        })
        res.status(200).send(result)

        if (!result) {
            throw new Error("Error, incorrect id");


        }

    } catch (error:any) {
        res.status(404).send(error.message)
    }


})



app.get("/countries/:id", (req: Request, res: Response) => {

    try {
        const result = countries.find((nation) => {
            nation.id === Number(req.params.id)
        })

        res.status(200).send(result)

        if (!result) {
            throw new Error("Type a correct id ");

        }

    } catch (error:any) {
        res.status(404).send(error.massage)
    }

})




app.post("/countries/:id", (res: Response, req: Request) => {
try{

    const result = countries.map((nation)=>{
       return( 
           {name:nation.name,
        capital:nation.capital}
    )})
    res.status(200).send(result)
    if(!result){
        throw new Error("Error,country not found")
    }

}catch(error:any){
    res.status(400).send(error.massage)

}

})




