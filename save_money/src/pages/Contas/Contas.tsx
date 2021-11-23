import React from "react";
import "./Contas.css"

function Contas(){

    return(
        <>
            <form className="form-style-Debts" id="productForm">
                <ul>
                    <h3>Cadastro de Despesas</h3>
                    <li>
                        <label htmlFor="name">Nome da despesa</label>
                        <input type="text" name="name" />
                        <span>Insira o nome desta despesa</span>
                    </li>
                    <li>
                        <label htmlFor="description">Descrição</label>
                        <input type="text" name="description" />
                        <span>Descreva os detalhes da despesa</span>
                    </li>
                    <li>
                        <label htmlFor="cost">Custo especifico</label>
                        <input type="text" name="cost" />
                        <span>Valor referente à esta despesa</span>
                    </li>
                    <li>
                        <label htmlFor="categories">Selecione a categoria:</label>
                        <select name="categories" id="categories" form="productForm">
                            <option value="1">Contas Mensais (ex: água, luz)</option>
                            <option value="2">Compras e ingredientes</option>
                            <option value="3">Serviços de entrega</option>
                            <option value="4">Outras despesas</option>
                        </select>
                    </li>
                    <li>
                        <input type="submit" value="Confirmar registro" />
                    </li>
                </ul>

            </form>

            <form className="form-style-Dashboard">
                <ul>
                    <h3>Dashboard de Contas</h3>
                </ul>
                <ul>
                    <h3>Dashboard de lucro</h3>
                </ul>
            </form>
        </>
    )
}

export default Contas;