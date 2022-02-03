const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./Database/database");

//config
dotenv.config({path:"./.env"})

///Connecting to Database
connectDatabase()

app.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
});
