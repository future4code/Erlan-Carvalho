import { AddressInfo } from "net";
import { app } from "./app";

//ENDPOINTS IMPORTS 
import { insertProductsController } from "./controller/insertProductsController";
import { selectAllProductsController } from "./controller/selectAllProductsController";
import { selectProductsByNameOrIdController } from "./controller/selectProductsController";


//###############
//## ENDPOINTS ##
//###############

app.post("/products", insertProductsController)
app.get("/products/:id?", selectProductsByNameOrIdController)
app.get("/allProducts", selectAllProductsController)

//###############
//## ENDPOINTS ##
//###############


export const server = app.listen(process.env.PORT || 3003, () => {
    const address = server.address() as AddressInfo;

    if (server) {
        console.log(`Server is runing in http://localhost:${address.port}`)
    } else {
        console.log(`Error upon starting the server`)
    }
})