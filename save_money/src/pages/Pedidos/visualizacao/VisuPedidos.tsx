import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../services/api";
import "./VisuPedidos.css"

interface Pedido{
    [x: string]: any;
    id_pedido: any,
    id_cliente: any,
    id_produto: any,
    qtd_produto: any,
    data_entrega: any,
    valor_total: any
}

function VisuPedidos(){

    const [pedidos, setPedido] = useState<Pedido>();

    useEffect(() => {
        api.get(`/api/orders`).then(response => {
            setPedido(response.data.orders);
        });
    });

    async function deleteOrders(id_pedido: any){

        await api.delete(`/api/order/${id_pedido}`).then(response => {
            alert(response.data.message);
            window.location.reload()
        });
    }
    
    if(!pedidos){
        return <p>Carregando...</p>;
    }

    return(
        <div className="form-style-CardOrder">
                <ul>
                    <h3>Listagem de Pedidos</h3>
                    {pedidos.map((pedido: any) => {
                        return(
                            <li>
                                <div className="label-content-order">
                                    <label> <strong>Cpf do cliente: </strong>{pedido.id_cliente}</label>
                                    <label> <strong>Quantidade: </strong>{pedido.qtd_produto}</label>
                                    <label> <strong>Data de entrega: </strong>{pedido.data_entrega.substring(0,10)}</label>
                                    <label> <strong>Total do pedido: </strong>R${pedido.valor_total}</label>
                                </div>
                                <div className="btn-order">
                                    <Link to="" className="link-btn-order">
                                        <button onClick={() => deleteOrders(pedido.id_pedido)}>
                                            Deletar
                                        </button>
                                    </Link>
                                </div>
                            </li>
                        )
                    })}
                </ul>
        </div>
    )
}

export default VisuPedidos;