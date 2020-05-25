var express = require("express");
var router = express.Router();
router.get("/api/forms/*",function(req,res){
    console.log("forms/id call");
})
module.exports = router;