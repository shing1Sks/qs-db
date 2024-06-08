import dotenv from "dotenv";
import connectToDB from "op-db/dbMongo.js";
import expressApp from "op-db/expressApp.js";

dotenv.config({path: "../.env"});


// Connect to the database
connectToDB();
const app = expressApp();
export default app;