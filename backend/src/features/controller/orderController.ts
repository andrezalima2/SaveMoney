import { Request, Response } from 'express';
const orderModel = require('../model/orderModel');
const pedidosClienteModel = require('../model/clientModel');
const pedidosProdutoModel = require('../model/productModel');

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

    async selectOptions(request: Request, response: Response){

        const prods = await pedidosProdutoModel.selectAllProducts()
        const clients = await pedidosClienteModel.selectAllClients()

        if(clients && prods){
            response.json({
                produtos: prods,
                clientes: clients
            })
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
                message: "Pedido deletado!"
            })
        } else{
            response.json({
                status: "500",
                message: "Erro ao deletar!"
            })
        }
    }    
}