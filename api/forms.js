var express = require("express");
var variable = require("./../app.js")
var router = express.Router();
router.get("/api/forms",function(req,res){
        res.json(variable.DB.retrive("forms",true,"title","id"));
})
router.put("/api/forms",function(req,res){
        variable.DB.insert("forms",req.body)
        res.json({message:"data recived"})
})
module.exports = router;