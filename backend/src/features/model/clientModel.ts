const clientConn = require('../../database/connection')

async function selectAllClients(){
    const sql = 'SELECT * FROM clientes'
    const rows = await clientConn.simpleQuery(sql);
    return rows;
}

async function selectTargetClient(id_cpf: any){

    const sql = 'SELECT * FROM clientes WHERE id_cpf = ?';
    const values = [id_cpf];
    const rows = await clientConn.valuedQuery(sql, values);
    return rows;
}

async function insertClients(id_cpf: any, nome_cliente: any, endereco: any, telefone: any){

    const sql = 'INSERT INTO clientes(id_cpf, nome_cliente, endereco, telefone) values(?, ?, ?, ?)';
    const values = [id_cpf, nome_cliente, endereco, telefone];
    const rows = await clientConn.valuedQuery(sql, values);
    return rows;
}

async function updateClients(id_cpf: any, nome_cliente: any, endereco: any, telefone: any){

    const sql = 'UPDATE clientes SET nome_cliente = ?, SET endereco = ?, SET telefone = ? WHERE id_cpf = ?';
    const values = [nome_cliente, endereco, telefone, id_cpf];
    const rows = await clientConn.valuedQuery(sql, values);
    return rows;
}

module.exports = { selectTargetClient, insertClients, updateClients, selectAllClients }