const productConn = require('../../database/connection')

async function selectAllProducts(){

    const sql = 'SELECT * FROM produtos';
    const rows = await productConn.simpleQuery(sql);
    return rows;
}

async function selectTargetProducts(id_prod: any){

    const sql = 'SELECT * FROM produtos WHERE id_prod = ?';
    const values = [id_prod];
    const rows = await productConn.valuedQuery(sql, values);
    return rows;
}

async function selectProdPerCategorie(id_categoria: any){
    const sql = 'SELECT * FROM produtos WHERE id_categoria = ?';
    const values = [id_categoria];
    const rows = await productConn.valuedQuery(sql, values);
    return rows;
}

async function insertProducts(id_categoria: any, nome_prod: any, custo: any, preco_venda: any){

    const sql = 'INSERT INTO produtos(id_categoria, nome_prod, custo, preco_venda) values(?, ?, ?, ?)';
    const values = [id_categoria, nome_prod, custo, preco_venda];
    const rows = await productConn.valuedQuery(sql, values);
    return rows;
}

async function updateProducts(id_categoria: any, nome_prod: any, custo: any, preco_venda: any, id_prod: any){

    const sql = 'UPDATE produtos SET id_categoria = ?, SET nome_prod = ?, SET custo = ?, SET preco_venda = ? WHERE id_prod = ?';
    const values = [id_categoria, nome_prod, custo, preco_venda, id_prod];
    const rows = await productConn.valuedQuery(sql, values);
    return rows;
}

async function deleteProducts(id_prod: any){

    const sql = 'DELETE FROM produtos WHERE id_prod = ?';
    const values = [id_prod];
    const rows = await productConn.valuedQuery(sql, values);
    return rows;
}

module.exports = { selectAllProducts, selectTargetProducts, insertProducts, updateProducts, deleteProducts, selectProdPerCategorie }