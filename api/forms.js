var express = require("express");
var router = express.Router();
let forms_names = {"forms":[
    {"title":"ali",
    "id":"1234"
    },
    {"title":"mohammad",
    "id":"2"
    },
    {"title":"n",
    "id":"34"
    },
    {"title":"l",
    "id":"78"
    },
    {"title":"ollll",
    "id":"123"
    }
]
};
const forms_descriptors = require('./../asset/forms.json');
router.get("/api/forms",function(req,res){
        res.json(forms_names);
        console.debug("no prop");
})
module.exports = router;