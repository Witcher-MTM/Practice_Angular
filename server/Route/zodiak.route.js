const express = require('express');
const router = express.Router();
const ZodiakController = require("../Controller/zodiak.controller")

router.post('/',async(req,res)=>{
    await(ZodiakController.FindZodiak(req,res));
})

module.exports = router;