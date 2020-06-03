var express = require("express");
var variable = require("./../app.js")
var router = express.Router();
router.post("/api/forms/:id", function (req, res) {
    variable.logger.log({
        level:'info',
        message:'sample of form '+req.params.id+ ' submitted'
    })
    res.json({ message: "form submitted!" });
})
router.get("/api/forms/:id", function (req, res) {
    console.debug(variable.DB.findFormdescriptor(req.params.id));
    let result = variable.DB.findFormdescriptor(req.params.id);
    if(result){
        res.json(result);
    }else{
        res.status(404).send({message:"form descriptor did not found"})
    }
})

module.exports = router;