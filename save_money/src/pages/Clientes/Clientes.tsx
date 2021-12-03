import React, { FormEvent, useState } from 'react';
import api from '../../services/api';
import "./Clientes.css";

function Clientes(){

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [cpf, setCpf] = useState('');
    const [contact, setContact] = useState('');

    async function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();

        const dados = {name: name, cpf: cpf, address: address, contact: contact};
    
        await api.post('/api/clients', dados).then(res => {
            if(res){
                alert("Cadastro efetuado!")
                window.location.reload()
            }else{
                alert("Cadastro não efetuado")
            }
        });
    }

    return(
        <form onSubmit={handleSubmit} className="form-style-Client">
            <ul>
                <h3>Cadastro de Clientes</h3>
                <li>
                    <label htmlFor="name">Nome</label>
                    <input type="text" name="name" value={name} onChange={event => setName(event.target.value)}/>
                    <span>Insira o nome</span>
                </li>
                <li>
                    <label htmlFor="address">Endereço</label>
                    <input type="text" name="address" value={address} onChange={event => setAddress(event.target.value)}/>
                    <span>Insira o endereço</span>
                </li>
                <li>
                    <label htmlFor="cpf">CPF</label>
                    <input type="text" name="cpf" value={cpf} onChange={event => setCpf(event.target.value)}/>
                    <span>Insira o CPF</span>
                </li>
                <li>
                    <label htmlFor="contact">Telefone</label>
                    <input type="text" name="contact" value={contact} onChange={event => setContact(event.target.value)}/>
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