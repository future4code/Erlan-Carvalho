import { app } from "./app";
import { AddressInfo } from "net";

//ENDPOINTS
import { insertCompetitionController } from "./conttroller/insertCompetitionController";
import { selectAllCompetitionsController } from "./conttroller/selectAllCompetitionsController";
import { selectCompetitionByNameController } from "./conttroller/selectCompetitionByNameController";
import { selectCompetitionRankingController } from "./conttroller/selectCompetitionRankingController";


//###############
//## ENDPOINTS ##
//###############

app.post("/competition", insertCompetitionController)
app.get("/competition", selectAllCompetitionsController)
app.get("/competition/:competicao", selectCompetitionByNameController)
app.get("/ranking",selectCompetitionRankingController)

//###############
//## ENDPOINTS ##
//###############

const server = app.listen(process.env.PORT || 3003, () => {
    const address = server.address() as AddressInfo

    if (server) {
        console.log(`Server is runing in http://localhost:${address.port}`)
    }else{
        console.log(`Error upon starting the server`)
    }
})