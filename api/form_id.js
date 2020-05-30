var express = require("express");
var router = express.Router();
const forms_descriptors = require('./../asset/forms.json');
router.post("/api/forms/:id", function (req, res) {
    console.log("forms/id call");
    res.json({ message: "form submitted!" });
})
router.get("/api/forms/:id", function (req, res) {
    console.log(req);
    console.debug(forms_descriptors.forms.find(item => {
        return item.id == req.params.id;
    }));
    res.json(forms_descriptors.forms.find(item => {
        return item.id == req.params.id;
    }));
})

module.exports = router;