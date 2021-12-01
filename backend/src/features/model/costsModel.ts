const costsConn = require('../../database/connection')

async function selectAllCosts(){

    const sql = 'SELECT * FROM despesas';
    const rows = await costsConn.simpleQuery(sql);
    return rows;
}

async function selectTargetCosts(id_despesa: any){

    const sql = 'SELECT * FROM despesas WHERE id_despesa = ?';
    const values = [id_despesa];
    const rows = await costsConn.valuedQuery(sql, values);
    return rows;
}

async function insertCosts(id_categoria: any, nome_despesa: any, descricao_despesa: any, custo_despesa: any){

    const sql = 'INSERT INTO despesas(id_categoria, nome_despesa, descricao_despesa, custo_despesa) values(?, ?, ?, ?)';
    const values = [id_categoria, nome_despesa, descricao_despesa, custo_despesa];
    const rows = await costsConn.valuedQuery(sql, values);
    return rows;
}

async function updateCosts(id_despesa: any, id_categoria: any, nome_despesa: any, descricao_despesa: any, custo_despesa: any){

    const sql = 'UPDATE despesas SET id_categoria = ?, SET nome_despesa = ?, SET descricao_despesa = ?, SET custo_despesa = ? WHERE id_despesa = ?';
    const values = [id_categoria, nome_despesa, descricao_despesa, custo_despesa, id_despesa];
    const rows = await costsConn.valuedQuery(sql, values);
    return rows;
}

async function deleteCosts(id_despesa: any){

    const sql = 'DELETE FROM despesas WHERE id_despesa = ?';
    const values = [id_despesa];
    const rows = await costsConn.valuedQuery(sql, values);
    return rows;
}

module.exports = { selectAllCosts, selectTargetCosts, insertCosts, updateCosts, deleteCosts }