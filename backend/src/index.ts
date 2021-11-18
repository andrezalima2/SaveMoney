import express from 'express';
//import routes from './_config/routes.js';
import cors from 'cors';

const app = express();
const corsOptions ={
    origin:'*',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}

console.log("App rodando");

app.use(cors(corsOptions));
//app.use(routes);
app.listen(3333);
