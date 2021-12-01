import { Request, Response } from 'express';
const orderModel = require('../model/orderModel')

export default{

    async selectAllOrders(request: Request, response: Response){

        const orders = await orderModel.selectAllOrders()

        if(orders){
            response.json({
                orders: orders
            })
        }else{
            console.log("erro ao procurar")
        }
    },

    async selectTargetOrder(request: Request, response: Response){

        const{
            id_pedido
        } = request.params;

        const orders = await orderModel.selectTargetOrder(id_pedido);

        if(orders){
            response.json({
                orders: orders
            })
        }else{
            console.log("erro ao procurar")
        }
    },

    async insertOrders(request: Request, response: Response){

        const{
            id_cliente,
            id_produto,
            qtd_produto,
            data_entrega,
            valor_total
        } = request.body;

        const orders = await orderModel.insertOrders(id_cliente, id_produto, qtd_produto, data_entrega, valor_total);
        if (orders){
            response.json({
                status: "200",
                message: "pedido cadastrado"
            })
        } else{
            response.json({
                status: "500",
                message: "pedido não cadastrado"
            })
        }
    },
    
    async updateOrders(request: Request, response: Response){

        const{
            id_cliente,
            id_produto,
            qtd_produto,
            data_entrega,
            valor_total
        } = request.body;

        const{
            id_pedido
        } = request.params;

        const orders = await orderModel.updateOrders(id_pedido, id_cliente, id_produto, qtd_produto, data_entrega, valor_total)
        if (orders){
            response.json({
                status: "200",
                message: "pedido atualizado"
            })
        } else{
            response.json({
                status: "500",
                message: "pedido não atualizado"
            })
        }
    },

    async deleteOrders(request: Request, response: Response){

        const{
            id_pedido
        } = request.params;

        const orders = await orderModel.deleteOrders(id_pedido)
        if (orders){
            response.json({
                status: "200",
                message: "pedido deletado"
            })
        } else{
            response.json({
                status: "500",
                message: "erro ao deletar"
            })
        }
    }    
}