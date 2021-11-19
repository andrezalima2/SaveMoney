import { Request, Response } from 'express';

const clientModel = require('../model/userModel')

export default{

    async selectAllClient(request: Request, response: Response){

        const client = await clientModel.selectAllClient()

        if(client){
            response.json(client)
        }else{
            const message = {
                erro: "Não foi possível"
            }

            response.json(message.erro)
        }
    }
}