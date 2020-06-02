var express = require("express");
var router = express.Router();
const forms_descriptors = require('./../asset/forms.json');
router.post("/api/forms/:id", function (req, res) {
    console.log("forms/id call");
    res.json({ message: "form submitted!" });
})
router.get("/api/forms/:id", function (req, res) {
    console.log(req);
    let result = forms_descriptors.forms.find(item => {
        return item.id == req.params.id;
    });
    if(result){
        res.json(result);
    }else{
        res.status(404).send({message:"form descriptor didnt found"})
    }
})

module.exports = router;