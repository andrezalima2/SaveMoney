import React, { useEffect, useState } from "react";
import api from "../../services/api";
import "./Pedidos.css"

interface Produto{
    [x: string]: any;
    id_prod: any,
    nome_prod: any,
}

function Pedidos(){

    const [produtos, setProduto] = useState<Produto>();

    useEffect(() => {
        api.get(`/api/products`).then(response => {
          setProduto(response.data.products);
        });
    });

    if(!produtos){
        return <p>Carregando...</p>;
    }

    return(
        <form className="form-style-Order" id="orderForm">
            <ul>
                <h3>Cadastro de Pedidos</h3>
                <li>
                    <label htmlFor="categories">Selecione o produto:</label>
                    <select name="categories" id="categories" form="orderForm">
                        {produtos.map((produto: any) => {
                            return(
                                <option value={produto.id_prod}>{produto.nome_prod}</option>
                            )
                        })}
                    </select>
                </li>
                <li>
                    <label htmlFor="cpf">CPF do Cliente</label>
                    <input type="text" name="cpf" />
                    <span>Insira a identificação do cliente</span>
                </li>
                <li>
                    <label htmlFor="quantity">Quantidade do pedido</label>
                    <input type="text" name="quantity" />
                    <span>Insira o número de produtos</span>
                </li>
                <li>
                    <label htmlFor="deliverDate">Data de entrega</label>
                    <input type="text" name="deliverDate" />
                    <span>Insira a data de entrega</span>
                </li>
                <li>
                    <label htmlFor="totalprice">Preço final</label>
                    <input type="text" name="totalprice" />
                    <span>Insira o preço final total do pedido</span>
                </li>
                <li>
                    <input type="submit" value="Confirmar pedido" />
                </li>
            </ul>
            
        </form>
    )
}

export default Pedidos;