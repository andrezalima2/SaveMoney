import React from 'react';
import "./Clientes.css"

function Clientes(){

    return(
        <form className="form-style-Client">
            <ul>
                <h3>Cadastro de Clientes</h3>
                <li>
                    <label htmlFor="name">Nome</label>
                    <input type="text" name="name" />
                    <span>Insira o nome</span>
                </li>
                <li>
                    <label htmlFor="address">Endereço</label>
                    <input type="text" name="address" />
                    <span>Insira o endereço</span>
                </li>
                <li>
                    <label htmlFor="cpf">CPF</label>
                    <input type="text" name="cpf" />
                    <span>Insira o CPF</span>
                </li>
                <li>
                    <label htmlFor="contact">Telefone</label>
                    <input type="text" name="contact" />
                    <span>Insira o telefone</span>
                </li>
                <li>
                    <input type="submit" value="Confirmar cadastro" />
                </li>
            </ul>
        </form>
    )
}

export default Clientes;