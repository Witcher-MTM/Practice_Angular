const express = require("express");
const app = express();
const ZodiakRouter = require("./Route/zodiak.route")
app.use(express.json());
app.use('/zodiak',ZodiakRouter);
app.listen(3000,()=>{
    console.log("Started on 3000")
})