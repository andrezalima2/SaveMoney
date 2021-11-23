import React from "react";
import "./Pedidos.css"

function Pedidos(){

    return(
        <form className="form-style-Order" id="orderForm">
            <ul>
                <h3>Cadastro de Pedidos</h3>
                <li>
                    <label htmlFor="categories">Selecione o produto:</label>
                    <select name="categories" id="categories" form="orderForm">
                        <option value="1">Bolo de Laranja</option>
                        <option value="2">Bolo de Fubá</option>
                        <option value="3">Brigadeiros</option>
                        <option value="4">Beijinhos</option>
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