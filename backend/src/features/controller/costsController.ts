import { Request, Response } from 'express';
const costsModel = require('../model/costsModel')

export default{

    async selectAllCosts(request: Request, response: Response){

        const costs = await costsModel.selectAllCosts()

        if(costs){
            response.json({
                costs: costs
            })
        }else{
            console.log("erro ao procurar")
        }
    },

    async selectTargetCosts(request: Request, response: Response){

        const{
            id_despesa
        } = request.params;

        const costs = await costsModel.selectTargetCosts(id_despesa);

        if(costs){
            response.json({
                costs: costs
            })
        }else{
            console.log("erro ao procurar")
        }
    },

    async insertCosts(request: Request, response: Response){

        const{
            id_categoria,
            nome_despesa,
            descricao_despesa,
            custo_despesa
        } = request.body;

        const costs = await costsModel.insertCosts(id_categoria, nome_despesa, descricao_despesa, custo_despesa);
        if (costs){
            response.json({
                status: "200",
                message: "despesa cadastrada"
            })
        } else{
            response.json({
                status: "500",
                message: "despesa não cadastrada"
            })
        }
    },
    
    async updateCosts(request: Request, response: Response){

        const{
            id_categoria,
            nome_despesa,
            descricao_despesa,
            custo_despesa
        } = request.body;

        const{
            id_despesa
        } = request.params;

        const costs = await costsModel.updateCosts(id_despesa, id_categoria, nome_despesa, descricao_despesa, custo_despesa)
        if (costs){
            response.json({
                status: "200",
                message: "despesa atualizada"
            })
        } else{
            response.json({
                status: "500",
                message: "despesa não atualizada"
            })
        }
    },
    
    async deleteCosts(request: Request, response: Response){
        const{
            id_despesa
        } = request.params;

        const costs = await costsModel.deleteCosts(id_despesa)
        if (costs){
            response.json({
                status: "200",
                message: "despesa deletada"
            })
        } else{
            response.json({
                status: "500",
                message: "erro ao deletar"
            })
        }
    }
}