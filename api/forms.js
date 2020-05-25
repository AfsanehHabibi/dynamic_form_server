var express = require("express");
var router = express.Router();
router.get("/api/forms",function(req,res){
    console.log("forms call");
})
module.exports = router;