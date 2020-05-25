require('dotenv').config()
const express = require("express");
const winston = require("winston");
const bodyParser = require('body-parser');
const fs= require('fs');
const rfs = require('rotating-file-stream')
const path=require('path');
const morgan =require('morgan');
const cors = require('cors');
const app = express();
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(cors());
var requestLogStream = rfs.createStream('requests.log',
 {  interval: '1d', // rotate daily  
path: path.join(__dirname, 'log')})
const logger = winston.createLogger({
    transports: [
      new winston.transports.File({ filename: path.join(__dirname, 'log/server.log') })
    ]
  });
app.use(morgan('dev', { stream: requestLogStream }));
app.use(require("./api/forms.js"));
app.use(require("./api/form_id.js"));
app.set('port',process.env.PORT );
app.listen(app.get('port'));
logger.log({
    level:'info',
    message:'app listening in port '+app.get('port')
});
exports.logger=logger;