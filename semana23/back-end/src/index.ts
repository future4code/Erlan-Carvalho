import { app } from "./app";
import { AddressInfo } from "net";



//###############
//## ENDPOINTS ##
//###############



//###############
//## ENDPOINTS ##
//###############



export const server = app.listen(process.env.PORT || 3003, ()=>{
    const address = server.address() as AddressInfo
    if(server){
        console.log(`Server is runing in http://localhost:${address.port}`)
    }else{
        console.log(`Error upon starting the server`)
    }
})