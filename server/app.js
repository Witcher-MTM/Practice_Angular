const express = require("express");
const app = express();
const ZodiakRouter = require("./Route/zodiak.route")
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
  }

app.use(cors(corsOptions));
app.use(express.json());
app.use('/zodiak',ZodiakRouter);
app.listen(3000,()=>{
    console.log("Started on 3000")
})