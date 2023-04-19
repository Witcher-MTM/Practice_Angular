const express = require('express');
const router = express.Router();
const ZodiakController = require("../Controller/zodiak.controller")

router.get('/',async(req,res)=>{
    res.send(200).ZodiakController.FindZodiak(req,res);
})

module.exports = router;