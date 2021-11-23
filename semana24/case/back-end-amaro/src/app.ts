import express ,{Express} from "express";
import cors from "cors";
import xmlparser from "express-xml-bodyparser";

export const app: Express = express();

app.use(express.json());
app.use(xmlparser());
app.use(cors());
