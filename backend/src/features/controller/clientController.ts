import { json } from 'body-parser';
import { Request, Response } from 'express';
const clientModel = require('../model/clientModel')

export default{

    async selectAllClients(request: Request, response: Response){

        console.log(request.body)

        const clients = await clientModel.selectAllClients();
        
        if(clients){
            response.json({
                clients: clients
            })
        } else{
            console.log("erro ao consultar clientes")
        }
    },

    async selectTargetClient(request: Request, response: Response){

        const{
            id_cpf
        } = request.params;

        const clients = await clientModel.selectTargetClient(id_cpf);

        if(clients){
            response.json({
                clients: clients
            })
        }else{
            console.log("erro ao procurar")
        }
    },

    async insertClients(request: Request, response: Response){

        const{
            name,
            address,
            cpf,
            contact
        } = request.body;

        const clients = await clientModel.insertClients(cpf, name, address, contact);
        if (clients){
            response.json({
                status: "200",
                message: "cliente cadastrado"
            })
        } else{
            response.json({
                status: "500",
                message: "cliente não cadastrado"
            })
        }
    },
    
    async updateClients(request: Request, response: Response){

        const{
            nome_cliente,
            endereco,
            telefone
        } = request.body;

        const{
            id_cpf
        } = request.params;

        const clients = await clientModel.updateClients(id_cpf, nome_cliente, endereco, telefone)
        if (clients){
            response.json({
                status: "200",
                message: "cliente atualizado"
            })
        } else{
            response.json({
                status: "500",
                message: "cliente não atualizado"
            })
        }
    }    
}