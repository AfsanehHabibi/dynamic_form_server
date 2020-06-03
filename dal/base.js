module.exports = class database {
    constructor(props) {
        console.debug(props)
        this.databaseFile = require(props);
        console.debug(this.databaseFile.forms)
    }

    findFormdescriptor(id){
        return this.databaseFile.forms.find(item => {
            return item.id == id;
        });
    }
    insert(path, data) {
        this.databaseFile[path].push(data);
    }
    retrive(neme, ...fields) {

    }
    retrive(name, isArray, ...fields) {
        let result = {};
        result[name] = [];
        console.debug(result)
        if (isArray) {
            this.databaseFile[name].forEach(element => {
                let element_result={}
                fields.forEach(field => {
                    element_result[field]=element[field];
                    console.debug(element_result)
                })
                result[name].push(element_result)
                console.debug(result[name])
            });
        }
        console.debug("result")
        console.debug(result)
        console.debug("result")
        return result;
    }
    
}