import { Product } from "../classes/Product";
import { connection } from "../index";
import { app } from "../index";
import { Request,Response } from "express";

//Create Product
app.post("/user",async (req:Request, res:Response) =>{
    try{
    await connection("ecommerceProduct")
    .insert({
        id:Date.now().toString(),
        productName:req.body.productName,
        productDesciption:req.body.productDesciption,
        productPrice:req.body.productPrice
    })
    res.status(200).send("Product created!")
    }catch(error:any){
        res.status(400).send("An error ocurred")
    }
} )