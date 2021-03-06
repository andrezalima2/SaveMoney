import express from 'express';
import routes from './_config/routes';
import cors from 'cors';
const formidable = require('express-formidable');
var bodyParser = require('body-parser')

const app = express();
const corsOptions ={
    origin:'*',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}

console.log("App rodando");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.json());
app.use(cors(corsOptions));
app.use(routes);
app.listen(3333);
